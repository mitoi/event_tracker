import Connection from "../db/Connection.js";
import eventsModel from "./EventsSchema.js";
import Utils from "../utils/charts/utils.js";

class Events {
    constructor() {
        this.connection = new Connection();
    }
    async initConnection() {
        await this.connection.connectToMongoDB();
    }

    async getEvents(filters) {
        let result = await eventsModel.find(filters);
        this.connection.close();
        return result;
    }

    async getEventsByType(chart = true) {
        // Query the database to get the count of events by type
        const eventData = await eventsModel.aggregate([
            { $group: { _id: '$type', count: { $sum: 1 } } }
        ]);
        const labels = eventData.map(item => item._id);

        // Transform the data for Chart.js
        const chartData = {
            labels: labels,
            datasets: [{
                label: 'Number of Events',
                data: eventData.map(item => item.count),
                backgroundColor: Utils.mapColorsToLabels(labels),
                borderWidth: 1
            }]
        };

        return chartData;
    }

    async getEventsByTypeByUser(chart = true) {
        try {
            // Create the aggregation pipeline
            const pipeline = [
                {
                    $group: {
                        _id: {
                            type: '$type',
                            user_name: '$user_name',
                        },
                        count: {
                            $sum: 1
                        }
                    }
                },
               
            ];

            // Query the database to get the count of events by type, user_name, and date_entered
            const eventData = await eventsModel.aggregate(pipeline);

            // Transform the data for Chart.js
            const chartData = {
                labels: eventData.map(item => item._id),
                datasets: eventData.map(item => ({
                    label: item._id.type + ' - ' + item._id.user_name,
                    data: item.data.map(d => d.count),
                    backgroundColor: Utils.mapColorsToLabels(item.data.map(d => d.date)),
                    borderWidth: 1
                }))
            };

            return chartData;
        } catch (error) {
            console.error('Error retrieving events:', error);
            throw error;
        }
    }
}

export default Events;