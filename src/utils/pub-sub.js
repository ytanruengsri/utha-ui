class PubSub {
    constructor() {
        this.lastUid = -1;
        this.topics = new Map();
    }

    subscribe(topic, listener) {
        // Create the topic's object if not yet created
        if (!this.topics.has(topic)) {
            this.topics.set(topic, []);
        }

        if (typeof listener !== 'function') {
            // warn wrong type of listener
            throw new Error('Listener must be a function');
        }

        // Increment uid
        this.lastUid += 1;
        const token = `uid_${String(this.lastUid)}`;

        // Add the listener to queue
        this.topics.get(topic).push({
            token,
            listener,
        });

        // Provide token for removal of topic
        return token;
    }

    publish(topic, data = {}) {
        // If the topic doesn't exist, or there's no listeners in queue, just leave
        if (!this.topics.has(topic)) {
            return false;
        }

        // Cycle through topics queue, fire!
        this.topics.get(topic).forEach((t) => {
            t.listener(data);
        });

        return true;
    }

    unsubscribe(value) {
        const isTopic = typeof value === 'string' && this.topics.has(value);

        if (isTopic) {
            this.clearSubscriptions(value);
            return;
        }

        this.topics.forEach((listeners) => {
            listeners.forEach((listener, index) => {
                if (listener.token === value) {
                    listeners.splice(index, 1);
                }
            });
        });
    }

    clearAllSubscriptions() {
        this.topics.clear();
    }

    clearSubscriptions(topic) {
        if (this.topics.has(topic)) {
            this.topics.delete(topic);
        }
    }
}

export default PubSub;
