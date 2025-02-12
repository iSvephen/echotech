import { pb } from '$lib/pocketbase';
import { fail, redirect } from '@sveltejs/kit';

export async function load() {
    try {
        const posts = await pb.collection('blogposts').getFullList({ sort: '-created' });
        return { posts };
    } catch (error) {
        console.error('Error loading blog posts:', error);
        return { posts: [] };
    }
}

export const actions = {
    create: async ({ request }) => {
        const formData = await request.formData();
        const title = formData.get('title');
        const content = formData.get('content');

        if (!title || !content) return fail(400, { message: 'Title and content are required' });

        try {
            const author = pb.authStore.model?.id || null;
            await pb.collection('blogposts').create({ title, content, author });
            throw redirect(303, '/blog');
        } catch (error) {
            console.error('Error creating post:', error);
            return fail(500, { message: 'Failed to create post' });
        }
    },

    update: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id');
        const title = formData.get('title');
        const content = formData.get('content');

        if (!id || !title || !content) return fail(400, { message: 'All fields are required' });

        try {
            await pb.collection('blogposts').update(id, { title, content });
            throw redirect(303, '/blog');
        } catch (error) {
            console.error('Error updating post:', error);
            return fail(500, { message: 'Failed to update post' });
        }
    },

    delete: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id');

        if (!id) return fail(400, { message: 'Invalid post ID' });

        try {
            await pb.collection('blogposts').delete(id);
            throw redirect(303, '/blog');
        } catch (error) {
            console.error('Error deleting post:', error);
            return fail(500, { message: 'Failed to delete post' });
        }
    }
};
