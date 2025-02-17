import { pb } from '$lib/pocketbase';
import { fail, redirect } from '@sveltejs/kit';

export async function load() {
    try {
        const clients = await pb.collection('clients').getFullList({ sort: '-created' });
        const contracts = await pb.collection('contracts').getFullList(
            { 
                expand: ['prepared_by'],
                sort: '-created' 
            }
        );
        const services = await pb.collection('services').getFullList({ sort: '-created' });
        const categories = await pb.collection('service_category').getFullList({ sort: '-created' });
        const units = await pb.collection('units').getFullList({ sort: '-created' });
        // console.log('clients:', clients);
        // console.log('services:', services);
        // console.log('categories:', categories);
        return { clients, contracts, services, categories, units };
    } catch (error) {
        console.error('Error loading units:', error);
        return { units: [] };
    }
}