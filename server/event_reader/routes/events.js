import Events from "../model/Events.js";

const eventsRoute = async (req, res) => {
    const events = new Events();
    await events.initConnection();
    const filters = req.query;
    try {
        const filtered = await events.getEvents(filters);
        res.status(200).json(filtered);
    } catch (e) {
        console.error('Error retrieving events:', e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export default eventsRoute;
