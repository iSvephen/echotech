import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';

export const pb = new PocketBase('https://echopb.stephen.vip');
// Disable auto-cancellation
pb.autoCancellation(false);

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
export { pb as default };  // Add default export