import { Request, Response, NextFunction } from 'express';
import { topics, Topic } from '../models/topic';

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
      parentTopicId: 1
    };
    topics.push(newTopic);
    res.status(201).json(newTopic);
  } catch (error) {
    next(error);
  }
};

// Read all topics
export const getTopics = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(topics);
  } catch (error) {
    next(error);
  }
};

// Read single topic
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

// Update a topic
export const updateTopic = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { name } = req.body;
    const topicIndex = topics.findIndex((i) => i.id === id);
    if (topicIndex === -1) {
      res.status(404).json({ message: 'Topic not found' });
      return;
    }
    topics[topicIndex].name = name;
    res.json(topics[topicIndex]);
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
