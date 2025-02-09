import { pb } from '$lib/pocketbase';

export async function handle({ event, resolve }) {
  try {
    // Load the cookie from the incoming request
    const cookie = event.request.headers.get('cookie') || '';
    pb.authStore.loadFromCookie(cookie);

    // If there's a valid session, try to refresh it
    if (pb.authStore.isValid) {
      try {
        await pb.collection('users').authRefresh();
      } catch (error) {
        console.error('Auth refresh failed:', error);
        pb.authStore.clear();
      }
    }

    // Process the request
    const response = await resolve(event);

    // Save updated auth state back to the cookie
    response.headers.set(
      'set-cookie',
      pb.authStore.exportToCookie({ httpOnly: false })
    );

    return response;
  } catch (error) {
    console.error('Error in hooks.server.js:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
