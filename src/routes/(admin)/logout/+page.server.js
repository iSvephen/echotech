import { pb } from '$lib/pocketbase';
import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
  // Clear the auth store (server-side)
  pb.authStore.clear();

  // Redirect to login
  throw redirect(302, '/');
}