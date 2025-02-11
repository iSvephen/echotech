import { goto } from '$app/navigation';
import { pb } from '$lib/pocketbase';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        
        // Required fields validation
        const requiredFields = ['name', 'nzbn', 'address', 'contact_name', 'contact_email'];
        const data = {};
        
        for (const field of requiredFields) {
            const value = formData.get(field)?.trim();
            if (!value) {
                return fail(400, {
                    error: `${field.replace('_', ' ')} is required`,
                    values: Object.fromEntries(formData)
                });
            }
            data[field] = value;
        }

        // Optional fields
        const optionalFields = ['contact_title', 'contact_phone', 'contact_address', 'remark'];
        for (const field of optionalFields) {
            data[field] = formData.get(field)?.trim() || '';
        }

        try {
            const record = await pb.collection('clients').create(data);
            console.log('Created client:', record);
            redirect(307, '/b');
        } catch (err) {
            console.error('Error creating client:', err);
            return fail(500, {
                error: err.message || 'Error creating client',
                values: Object.fromEntries(formData)
            });
        }
    }
};


// import { pb } from '$lib/pocketbase';
// import { fail, redirect } from '@sveltejs/kit';

// export const actions = {
//     default: async ({ request }) => {
//       const formData = await request.formData();
//       const name = formData.get('name');
//       const nzbn = formData.get('nzbn');
//       const address = formData.get('address');
//       const contact_name = formData.get('contact_name');
//       const contact_title = formData.get('contact_title');
//       const contact_email = formData.get('contact_email');
//       const contact_phone = formData.get('contact_phone');
//       const contact_address = formData.get('contact_address');
//       const remark = formData.get('remark');
  
//       try {
  
//         const record = await pb.collection('clients').create({ name, nzbn, address, contact_name, contact_title, contact_email, contact_phone, contact_address, remark });

//         console.log('Created client:', record);
//         // Redirect to the newly created post’s detail page
//         throw redirect(303, `/clients`);
//       } catch (err) {
//         console.error('Error creating client:', err);
//         return fail(500, { message: 'Error creating client' });
//       }
//     }
//   };
  