import { pb } from '$lib/pocketbase';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    
    // Get all form fields
    const name = formData.get('name')?.trim();
    const nzbn = formData.get('nzbn')?.trim();
    const address_street = formData.get('address_street')?.trim();
    const address_suburb = formData.get('address_suburb')?.trim();
    const address_city = formData.get('address_city')?.trim();
    const address_postcode = formData.get('address_postcode')?.trim();
    const contact_name = formData.get('contact_name')?.trim();
    const contact_email = formData.get('contact_email')?.trim();
    const contact_title = formData.get('contact_title')?.trim();
    const contact_phone = formData.get('contact_phone')?.trim();
    const contact_address = formData.get('contact_address')?.trim();
    const remark = formData.get('remark')?.trim();

    // Validate required fields
    const requiredFields = {
      name,
      nzbn,
      address_street,
      address_suburb,
      address_city,
      address_postcode,
      contact_name,
      contact_email,
      contact_phone
    };

    // Check for missing required fields
    for (const [field, value] of Object.entries(requiredFields)) {
      if (!value) {
        return fail(400, {
          error: `${field.replace('_', ' ')} is required`,
          values: Object.fromEntries(formData)
        });
      }
    }

    // Construct full address
    const address = `${address_street}, ${address_suburb}, ${address_city} ${address_postcode}`;

    try {
      // Debug log
      // console.log('Creating client with data:', {
      //   name,
      //   nzbn,
      //   address,
      //   address_street,
      //   address_suburb,
      //   address_city,
      //   address_postcode,
      //   contact_name,
      //   contact_email,
      //   contact_title,
      //   contact_phone,
      //   contact_address,
      //   remark
      // });

      const record = await pb.collection('clients').create({
        name,
        nzbn,
        address,
        address_street,
        address_suburb,
        address_city,
        address_postcode,
        contact_name,
        contact_email,
        contact_title,
        contact_phone,
        contact_address,
        remark
      });

      if (record) {
        throw redirect(303, '/clients');
      }
    } catch (err) {
      if (err && err.status && err.location) {
        throw err;
      }
      console.error('Error creating client:', err);
      return fail(500, {
        error: err.message || 'Error creating client',
        values: Object.fromEntries(formData)
      });
    }
  }
};