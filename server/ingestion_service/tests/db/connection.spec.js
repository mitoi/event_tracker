// connection.spec.js

import sinon from 'sinon';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import Connection from '../../db/connection.js';

describe('Connection', () => {
    let mongoServer;
    let connectStub;

    beforeAll(async () => {
        mongoServer = new MongoMemoryServer();
        const mongoUri = await mongoServer.getUri();

        connectStub = sinon.stub(mongoose, 'connect');
        connectStub.resolves();

        await Connection.connect(mongoUri);
    });

    afterAll(async () => {
        await mongoose.disconnect();
        await mongoServer.stop();
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should connect to MongoDB successfully', () => {
        expect(connectStub.calledOnce).toBe(true);
        expect(connectStub.args[0][0]).toBe('mongodb://mongo:27017/events');
    });
});
