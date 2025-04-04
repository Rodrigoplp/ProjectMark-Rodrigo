import { Request, Response, NextFunction } from 'express';
import { topics, Topic } from '../models/topic';
import { finder } from '../utils'

// Create a topic
export const createTopic = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, content } = req.body;

    const newTopic: Topic = {
      id: Date.now(),
      name,
      content,
      createdAt: new Date().toString(),
      updatedAt: new Date().toString(),
      version: 1,
      parentTopicId: req.body.parentTopicId ?? undefined
    };

    topics.push(newTopic);

    res.status(201).json(newTopic);
  } catch (error) {
    next(error);
  }
};

// Retrieve all topics
export const getTopics = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(topics);
  } catch (error) {
    next(error);
  }
};

// Retrieve single topic
export const getTopicById = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    const topic = topics.find((i) => i.id === id);
    if (!topic) {
      res.status(404).json({ message: 'Topic not found' });
      return;
    }
    res.json(topic);
  } catch (error) {
    next(error);
  }
};

// Retrieve single version of a topic
export const getTopicByIdVersion = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    const version = parseInt(req.params.version, 10)
    const topic = topics.find((i) => i.id === id && i.version === version);
    if (!topic) {
      res.status(404).json({ message: 'Topic not found' });
      return;
    }
    res.json(topic);
  } catch (error) {
    next(error);
  }
};

// Retrive topic and all subtopics recursively
export const getTopicByIdRecursive = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    const topic = topics.find((i) => i.id === id);
    if (!topic) {
      res.status(404).json({ message: 'Topic not found' });
      return;
    }
    const result = finder(topic.id)

    res.json(result);
  } catch (error) {
    next(error);
  }
};

// Update a topic (create nenw version)
export const updateTopic = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { name } = req.body;

    const oldTopicArray = topics.filter(t => t.id === id)

    if (oldTopicArray.length === 0) {
      res.status(404).json({ message: 'Topic not found' });
      return;
    }

    const oldTopic = oldTopicArray[oldTopicArray.length - 1]

    const newTopic: Topic = {
      id: oldTopic.id,
      name: oldTopic.name,
      content: oldTopic.content,
      createdAt: oldTopic.createdAt,
      updatedAt: new Date().toString(),
      version: oldTopic.version + 1,
      parentTopicId: oldTopic.parentTopicId ?? undefined
    };

    topics.push(newTopic)

    res.status(201).json(newTopic)
  } catch (error) {
    next(error);
  }
};

// Delete a topic
export const deleteTopic = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    const topicIndex = topics.findIndex((i) => i.id === id);
    if (topicIndex === -1) {
      res.status(404).json({ message: 'Topic not found' });
      return;
    }
    const deletedTopic = topics.splice(topicIndex, 1)[0];
    res.json(deletedTopic);
  } catch (error) {
    next(error);
  }
};
