import { redirect } from '@sveltejs/kit';

export function load({ cookies, url }) {
	if (!cookies.get('pb_auth')) {
		redirect(303, `/`);
	}
}
