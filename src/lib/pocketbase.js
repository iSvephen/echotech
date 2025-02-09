import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';

export const pb = new PocketBase('http://127.0.0.1:8090');

// Only load cookies and set up listeners in the browser environment
if (typeof window !== 'undefined') {
  // Load session from the browser's cookies
  pb.authStore.loadFromCookie(document.cookie);

  // Update cookies whenever the authStore changes
  pb.authStore.onChange(() => {
    document.cookie = pb.authStore.exportToCookie({ httpOnly: false });
  });
}

export const currentUser = pb.authStore.model;
export const isAuthenticated = writable(false);