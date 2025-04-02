import { Request, Response } from 'express';
import { getTopics } from '../src/controllers/topicController';
import { topics } from '../src/models/topic';

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
});
