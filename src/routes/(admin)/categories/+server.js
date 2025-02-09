import { json } from '@sveltejs/kit';
import pb from '$lib/pocketbase';

export async function GET() {
    try {
        const categories = await pb.collection('service_category').getFullList();
        return json({ success: true, categories });
    } catch (error) {
        console.error("PocketBase Error:", error);
        return json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function POST({ request }) {
    try {
        const data = await request.formData();
        const name = data.get('name');

        const category = await pb.collection('service_category').create({ name });

        return json({ success: true, category });
    } catch (error) {
        console.error("PocketBase Error:", error);
        return json({ success: false, error: error.message }, { status: 500 });
    }
}
