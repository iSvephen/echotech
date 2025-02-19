import { pb } from '$lib/pocketbase';
import { fail, redirect } from '@sveltejs/kit';

export async function load() {
    try {
        const company_info = await pb.collection('company_info').getOne('42bdrgj33m496a7');
        // console.log('company_info:', company_info);
        return { company_info };
    } catch (error) {
        console.error('Error loading company_info:', error);
        return { company_info: [] };
    }
}

export const actions = {
    update: async ({ request }) => {
        const formData = await request.formData();
        const id = '42bdrgj33m496a7'; // Assuming the ID is fixed for the company info
        const nzbn = formData.get('nzbn');
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const address_auckland = formData.get('address_auckland');
        const address_wellington = formData.get('address_wellington');
        const address_christchurch = formData.get('address_christchurch');

        try {
            await pb.collection('company_info').update(id, {  nzbn, name, email, phone, address_auckland, address_wellington, address_christchurch });
            throw redirect(303, '/company-info');
        } catch (error) {
            console.error('Error updating company info:', error);
            return fail(500, { message: 'Failed to update company info' });
        }
    },
};
