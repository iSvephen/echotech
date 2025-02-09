import { json } from '@sveltejs/kit';
import pb from '$lib/pocketbase';

export async function POST({ request }) {
    try {
        const data = await request.formData();
        const id = data.get('id');

        await pb.collection('service_category').delete(id);

        return json({ success: true });
    } catch (error) {
        return json({ success: false, error: error.message }, { status: 500 });
    }
}
