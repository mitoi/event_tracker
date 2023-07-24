// event.spec.js

import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import sinon from 'sinon';
import Event from '../../model/event.js';

// Instantiate a new MongoDB memory server
const mongoServer = new MongoMemoryServer();

// Connect to the MongoDB memory server
beforeAll(async () => {
  const mongoUri = await mongoServer.getUri();

  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

// Disconnect from the MongoDB memory server and stop it
afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

// Test suite for the Event model
describe('Event Model', () => {
  // Stub the save method of the Event model
  beforeEach(() => {
    sinon.stub(Event.prototype, 'save').resolves({});
  });

  // Restore the stubbed methods after each test
  afterEach(() => {
    sinon.restore();
  });

  // Test case for creating an event
  it('should create a new event', async () => {
    const eventData = {
      emmitter_id: '123',
      type: 'event',
      module: 'test',
      record_name: 'Test Record',
      record_id: '456',
      user_id: '789',
      user_name: 'John Doe',
      message: 'Event created',
      time_spent: 10,
    };

    const event = new Event(eventData);
    const savedEvent = await event.save();

    expect(Event.prototype.save.calledOnce).toBe(true);
    expect(savedEvent).toEqual({});
  });

  // Test case for indexing the emmitter_id field
  it('should index the emmitter_id field', () => {
    const emmitterIdIndex = Event.schema.indexes().find(
      (index) => index[0].hasOwnProperty('emmitter_id')
    );

    expect(emmitterIdIndex).toBeDefined();
    expect(emmitterIdIndex[0].emmitter_id).toBe(1);
  });

  // Test case for indexing the type field
  it('should index the type field', () => {
    const typeIndex = Event.schema.indexes().find(
      (index) => index[0].hasOwnProperty('type')
    );

    expect(typeIndex).toBeDefined();
    expect(typeIndex[0].type).toBe(1);
  });
});
