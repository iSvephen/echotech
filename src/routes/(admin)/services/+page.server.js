import { pb } from '$lib/pocketbase';
import { fail, redirect } from '@sveltejs/kit';

export async function load() {
    try {
        const services = await pb.collection('services').getFullList({ 
            expand: ['categoryId,unitId'],
            sort: '-created' 
        });

        const categories = await pb.collection('service_category').getFullList({ sort: '-created' });
        const units = await pb.collection('units').getFullList({ sort: '-created' });

        return { services, categories, units };
    } catch (error) {
        console.error('Error loading services:', error);
        return { services: [] };
    }
}

export const actions = {
    create: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('name');
        const categoryId = formData.get('categoryId');
        const subcategoryId = formData.get('subcategoryId');
        const unitId = formData.get('unitId');
        const t1 = formData.get('t1');
        const t2 = formData.get('t2');
        const t3 = formData.get('t3');
        const t4 = formData.get('t4');

        
        // if (!name || !categoryId || !subcategoryId || !t1 || !t2 || !t3 || !t4 || !unitId) {
        //     return fail(400, { message: 'All fields are required' });
        // }
        
        try {
            await pb.collection('services').create({ name, categoryId, subcategoryId, t1, t2, t3, t4, unitId });
            // console.log('service created');
            throw redirect(303, '/services');
        } catch (error) {
            console.error('Error creating service:', error);
            return fail(500, { message: 'Failed to create service' });
        }
    },

    update: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id');
        const name = formData.get('name');
        const categoryId = formData.get('categoryId');
        const subcategoryId = formData.get('subcategoryId');
        const unitId = formData.get('unitId');
        const t1 = formData.get('t1');
        const t2 = formData.get('t2');
        const t3 = formData.get('t3');
        const t4 = formData.get('t4');

        // if (!id || !name || !categoryId || !subcategoryId || !t1 || !t2 || !t3 || !t4 || !unitId) {
        //     return fail(400, { message: 'All fields are required' });
        // }

        try {
            await pb.collection('services').update(id, { name, categoryId, subcategoryId, t1, t2, t3, t4, unitId });
            throw redirect(303, '/services');
        } catch (error) {
            console.error('Error updating service:', error);
            return fail(500, { message: 'Failed to update service' });
        }
    },

    delete: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id');

        if (!id) return fail(400, { message: 'Invalid service ID' });

        try {
            await pb.collection('services').delete(id);
            throw redirect(303, '/services');
        } catch (error) {
            console.error('Error deleting service:', error);
            return fail(500, { message: 'Failed to delete service' });
        }
    }
};
