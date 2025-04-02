import { Router } from 'express';
import {
  createTopic,
  getTopics,
  getTopicById,
  updateTopic,
  deleteTopic,
} from '../controllers/topicController';

const router = Router();

router.get('/', getTopics);
router.get('/:id', getTopicById);
router.post('/', createTopic);
router.put('/:id', updateTopic);
router.delete('/:id', deleteTopic);

export default router;
