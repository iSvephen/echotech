import { json } from '@sveltejs/kit';
import pb from '$lib/pocketbase';

export async function POST({ request }) {
    try {
        const data = await request.formData();
        const id = data.get('id');
        const name = data.get('name');

        const category = await pb.collection('service_category').update(id, { name });

        return json({ success: true, category });
    } catch (error) {
        return json({ success: false, error: error.message }, { status: 500 });
    }
}
