import { pb } from '$lib/pocketbase';
import { fail, redirect } from '@sveltejs/kit';

export async function load() {
    try {
        // Get both active and archived users
        const users = await pb.collection('users').getFullList({
            sort: '-created',
            filter: 'archived = true || archived = false || archived = null'
        });
        return { users };
    } catch (error) {
        console.error('Error loading users:', error);
        return { users: [] };
    }
}

export const actions = {
    create: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');
        const passwordConfirm = formData.get('passwordConfirm');

        if (!name || !email || !password || !passwordConfirm) {
            return fail(400, { message: 'All fields are required' });
        }

        if (password !== passwordConfirm) {
            return fail(400, { message: 'Passwords do not match' });
        }

        try {
            const userData = {
                email,
                password,
                passwordConfirm,
                name,
                emailVisibility: true,
                username: email
            };

            const createdUser = await pb.collection('users').create(userData);
            console.log('User created successfully:', createdUser);

            // Return success instead of throwing redirect
            return {
                status: 303,
                headers: {
                    location: '/users'
                }
            };
        } catch (error) {
            console.error('Error in user creation:', error);

            // Handle specific error cases
            if (error.response?.data?.data?.email) {
                return fail(400, { message: `Email error: ${error.response.data.data.email.message}` });
            }
            if (error.response?.data?.data?.username) {
                return fail(400, { message: `Username error: ${error.response.data.data.username.message}` });
            }
            if (error.response?.data?.data?.password) {
                return fail(400, { message: `Password error: ${error.response.data.data.password.message}` });
            }

            return fail(500, { 
                message: error.response?.data?.message || 
                         error.message || 
                         'Failed to create user. Please try again.'
            });
        }
    },

    update: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id');
        const name = formData.get('name');
        const email = formData.get('email');
        const oldPassword = formData.get('oldPassword');
        const password = formData.get('password');
        const passwordConfirm = formData.get('passwordConfirm');
        const admin = formData.get('admin') === 'true';

        if (!id || !name || !email) {
            return fail(400, { message: 'Name and email are required' });
        }

        try {
            const updateData = {
                email,
                name,
                emailVisibility: true,
                admin
            };

            if (password && password.trim() !== '') {
                if (!oldPassword) {
                    return fail(400, { message: 'Current password is required to set new password' });
                }
                if (password !== passwordConfirm) {
                    return fail(400, { message: 'New passwords do not match' });
                }
                updateData.oldPassword = oldPassword;
                updateData.password = password;
                updateData.passwordConfirm = passwordConfirm;
            }

            await pb.collection('users').update(id, updateData);
            
            // Return success instead of throwing redirect
            return {
                status: 303,
                headers: {
                    location: '/users'
                }
            };
        } catch (error) {
            console.error('Error updating user:', error);
            
            if (error.response?.data?.data?.email) {
                return fail(400, { message: 'Email is already in use' });
            }
            if (error.response?.data?.data?.oldPassword) {
                return fail(400, { message: 'Current password is incorrect' });
            }
            if (error.response?.data?.data?.password) {
                return fail(400, { message: 'Password error: ' + error.response.data.data.password.message });
            }

            return fail(500, { 
                message: error.response?.data?.message || 
                         error.message || 
                         'Failed to update user'
            });
        }
    },

    archive: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id');

        if (!id) return fail(400, { message: 'Invalid user ID' });

        try {
            await pb.collection('users').update(id, { 
                archived: true,
                emailVisibility: false
            });
            
            // Return success instead of throwing redirect
            return {
                status: 303,
                headers: {
                    location: '/users'
                }
            };
        } catch (error) {
            console.error('Error archiving user:', error);
            return fail(500, { 
                message: error.response?.data?.message || 
                         error.message || 
                         'Failed to archive user'
            });
        }
    },

    unarchive: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id');

        if (!id) return fail(400, { message: 'Invalid user ID' });

        try {
            await pb.collection('users').update(id, { 
                archived: false,
                emailVisibility: true
            });
            
            return {
                status: 303,
                headers: {
                    location: '/users'
                }
            };
        } catch (error) {
            console.error('Error unarchiving user:', error);
            return fail(500, { 
                message: error.response?.data?.message || 
                         error.message || 
                         'Failed to unarchive user'
            });
        }
    },

    delete: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id');

        if (!id) return fail(400, { message: 'Invalid user ID' });

        try {
            await pb.collection('users').delete(id);
            
            return {
                status: 303,
                headers: {
                    location: '/users'
                }
            };
        } catch (error) {
            console.error('Error deleting user:', error);
            return fail(500, { 
                message: error.response?.data?.message || 
                         error.message || 
                         'Failed to delete user'
            });
        }
    }
}; 