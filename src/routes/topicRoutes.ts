import { Router } from 'express';
import {
  createTopic,
  getTopics,
  getTopicById,
  getTopicByIdVersion,
  getTopicByIdRecursive,
  updateTopic,
  deleteTopic
} from '../controllers/topicController';

const router = Router();

router.get('/recursive/:id', getTopicByIdRecursive);
router.get('/:id', getTopicById);
router.get('/:id/:version', getTopicByIdVersion);
router.get('/', getTopics);
router.post('/', createTopic);
router.put('/:id', updateTopic);
router.delete('/:id', deleteTopic);

export default router;
