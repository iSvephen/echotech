import { writable } from 'svelte/store';

export const notification = writable({
    message: '',
    type: '', // 'success', 'error', 'warning', 'info'
    show: false
});

export function showNotification(message, type = 'success') {
    notification.set({
        message,
        type,
        show: true
    });

    // Auto-hide after 3 seconds
    setTimeout(() => {
        notification.set({ message: '', type: '', show: false });
    }, 3000);
} 