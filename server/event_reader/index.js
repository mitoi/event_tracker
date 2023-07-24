import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import eventsRoute from './routes/events.js';
import eventsByTypeRoute from './routes/charts/eventsByType.js';
import eventsByTypeByUserRoute from './routes/charts/eventsByTypeByUser.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 3001;


// API route to retrieve events based on filters
app.get('/events', eventsRoute);
app.get('/events/chart/eventsByType', eventsByTypeRoute);
app.get('/events/chart/eventsByTypeByUserByDay', eventsByTypeByUserRoute);

// Start the server
app.listen(port, () => {
    console.log(`Server event reader is running on port ${port}`);
});
