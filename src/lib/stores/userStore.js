import { writable } from 'svelte/store';
import { pb } from '$lib/pocketbase';

// Create a writable store for the current user
export const currentUser = writable(pb.authStore.model);

// Subscribe to auth state changes
pb.authStore.onChange((auth) => {
    currentUser.set(auth?.model || null);
});
