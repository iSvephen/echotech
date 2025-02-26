import { pb } from '$lib/pocketbase';
import { fail } from '@sveltejs/kit';

export const actions = {
    updateProfile: async ({ request }) => {
        const formData = await request.formData();
        
        try {
            const userId = pb.authStore.model.id;
            const data = {
                name: formData.get('name') || '',
                title: formData.get('title') || '',
                email: formData.get('email') || '',
            };

            // Convert phone to number if present
            const phone = formData.get('phone');
            if (phone) {
                data.phone = Number(phone);
            }

            // Handle avatar upload
            const avatar = formData.get('avatar');
            if (avatar && avatar.size > 0) {
                data.avatar = avatar;
            }

            console.log('Updating profile with data:', data);
            
            const record = await pb.collection('users').update(userId, data);
            
            // Update the auth store
            pb.authStore.save(pb.authStore.token, record);
            
            return { success: true };
        } catch (err) {
            console.error('Error updating profile:', err);
            return fail(400, {
                error: err.message || 'Failed to update profile',
                values: Object.fromEntries(formData)
            });
        }
    },

    updatePassword: async ({ request }) => {
        const formData = await request.formData();
        const oldPassword = formData.get('oldPassword');
        const password = formData.get('password');
        const passwordConfirm = formData.get('passwordConfirm');

        if (!oldPassword || !password || !passwordConfirm) {
            return fail(400, {
                error: 'All password fields are required'
            });
        }

        if (password !== passwordConfirm) {
            return fail(400, {
                error: 'Passwords do not match'
            });
        }

        try {
            const userId = pb.authStore.model.id;
            await pb.collection('users').update(userId, {
                oldPassword,
                password,
                passwordConfirm
            });
            
            return { success: true };
        } catch (err) {
            console.error('Error updating password:', err);
            return fail(400, {
                error: err.message || 'Failed to update password'
            });
        }
    }
};
