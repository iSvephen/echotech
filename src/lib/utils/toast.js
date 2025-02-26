import { notifications } from '$lib/stores/notifications';

export const toast = {
    success: (message, title = '') => {
        notifications.add({
            type: 'success',
            title,
            message,
            duration: 3000
        });
    },
    error: (message, title = '') => {
        notifications.add({
            type: 'error',
            title,
            message,
            duration: 5000
        });
    },
    info: (message, title = '') => {
        notifications.add({
            type: 'info',
            title,
            message,
            duration: 3000
        });
    },
    warning: (message, title = '') => {
        notifications.add({
            type: 'warning',
            title,
            message,
            duration: 4000
        });
    }
};
