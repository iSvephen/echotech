import pb from '$lib/pocketbase';

export async function load() {
    if (!pb.authStore.isValid) {
        console.warn('User not logged in');
        return { posts: [] }; // Prevent unauthorized access
    }

    try {
        const posts = await pb.collection('posts').getFullList({ expand: 'user' });
        console.log('Fetched posts:', posts);
        return { posts };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { posts: [] };
    }
}
