import Event from "../model/event.js";
import producer from "../kafka/producer.js";

const eventRoute = async (req, res) => {
    const payload = req.body;

    try {
        await producer.send({
            topic: 'events',
            messages: [{ value: JSON.stringify(payload) }],
        });

        res.status(200).json({ message: 'Event sent successfully' });
    } catch (error) {
        console.error('Failed to send event:', error);
        res.status(500).json({ error: 'Failed to send event' });
    }
}

export default eventRoute;
