import { Request, Response } from 'express';
import { getTopics, getTopicByIdRecursive } from '../src/controllers/topicController';
import { topics } from '../src/models/topic';
import { topicMocks, treeMock } from './mocks'

describe('Topic Controller', () => {
  it('should return an empty array when no topics exist', () => {
    // Create mock objects for Request, Response, and NextFunction
    const req = {} as Request;
    const res = {
      json: jest.fn(),
    } as unknown as Response;

    // Ensure that our in-memory store is empty
    topics.length = 0;

    // Execute our controller function
    getTopics(req, res, jest.fn());

    // Expect that res.json was called with an empty array
    expect(res.json).toHaveBeenCalledWith([]);
  });

  it('should return a recursive tree of a topic and its children', () => {
    // Create mock objects for Request, Response, and NextFunction
    const req = {} as Request;
    const res = {
      json: topicMocks
    } as unknown as Response;

    // Load mock values into in-memory store
    topicMocks.forEach(t => topics.push(t))

    // Retrieve recursive tree
    req.params = { id: topicMocks[1].id.toString() }
    getTopicByIdRecursive(req, res, jest.fn())

    expect(res.json).toMatchObject(treeMock)
  })
});
