// src/routes/blog/[id]/+page.server.js
import { pb } from '$lib/pocketbase';

export async function load({ params }) {
  const { id } = params;

  try {
    const contract = await pb.collection('contracts').getOne(id, { expand: ['clientId,prepared_by'] });
    // Then fetch the user details separately if prepared_by exists
    if (contract.prepared_by) {
      const preparedByUser = await pb.collection('users').getOne(contract.prepared_by);
      contract.expand = {
        ...contract.expand,
        prepared_by: preparedByUser
      };
    }
    const categories = await pb.collection('service_category').getFullList({ 
      sort: '-created' 
  });
  console.log('Contract data:', {
    prepared_by_id: contract.prepared_by,
    prepared_by_expanded: contract.expand?.prepared_by
  });

  return { 
    contract, 
    categories 
  };
} catch (error) {
  console.error('Error loading contract:', error);
  return { 
    contract: null, 
    categories: [] 
  };
}
}