import { writable, derived } from 'svelte/store';
import { pb } from '$lib/pocketbase';

function createAuthStore() {
    const { subscribe, set, update } = writable({
        user: pb.authStore.model,
        token: pb.authStore.token,
        loading: false,
        error: null
    });

    return {
        subscribe,
        login: async (email, password, recaptchaResponse) => {
            update(state => ({ ...state, loading: true, error: null }));
            try {
                const authData = await pb.collection('users').authWithPassword(email, password);
                set({
                    user: authData.record,
                    token: pb.authStore.token,
                    loading: false,
                    error: null
                });
                return true;
            } catch (err) {
                update(state => ({
                    ...state,
                    loading: false,
                    error: err.message || 'Authentication failed'
                }));
                return false;
            }
        },
        logout: () => {
            pb.authStore.clear();
            set({ user: null, token: null, loading: false, error: null });
        },
        refreshSession: async () => {
            if (!pb.authStore.isValid) return;
            
            update(state => ({ ...state, loading: true }));
            try {
                const authData = await pb.collection('users').authRefresh();
                set({
                    user: authData.record,
                    token: pb.authStore.token,
                    loading: false,
                    error: null
                });
            } catch (err) {
                pb.authStore.clear();
                set({ user: null, token: null, loading: false, error: null });
            }
        }
    };
}

export const auth = createAuthStore();
export const isAuthenticated = derived(auth, $auth => !!$auth.token);
