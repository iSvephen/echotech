import { writable } from 'svelte/store';

function createNotificationStore() {
    const { subscribe, update } = writable([]);

    return {
        subscribe,
        add: (notification) => {
            const id = Math.random().toString(36).slice(2);
            const defaults = {
                id,
                type: 'info',
                duration: 3000,
                showProgress: true
            };
            
            update(notifications => [
                { ...defaults, ...notification },
                ...notifications
            ]);

            if (notification.duration !== Infinity) {
                setTimeout(() => {
                    update(notifications => notifications.filter(n => n.id !== id));
                }, notification.duration || defaults.duration);
            }
        },
        remove: (id) => {
            update(notifications => notifications.filter(n => n.id !== id));
        },
        clear: () => {
            update(() => []);
        }
    };
}

export const notifications = createNotificationStore();
