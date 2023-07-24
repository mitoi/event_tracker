import Events from "../../model/Events.js";

const eventsByTypeByUserRoute = async (req, res) => {
    const events = new Events();
    await events.initConnection();
    try {
        const filtered = await events.getEventsByTypeByUser();
        res.status(200).json(filtered);
    } catch (e) {
        console.error('Error retrieving events:', e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export default eventsByTypeByUserRoute;
