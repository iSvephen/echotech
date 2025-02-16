// src/routes/blog/[id]/+page.server.js
import { pb } from '$lib/pocketbase';

export async function load({ params }) {
  const { id } = params;

  try {
    const contract = await pb.collection('contracts').getOne(id, { expand: ['clientId', 'prepared_by'] });
    return { contract };
  } catch (error) {
    console.error('Error loading contract:', error);
    return { contract: null };
  }
}
