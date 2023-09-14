const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  createReaction,
  deleteReaction

} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thought/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

router
.route('/:thoughtId/reactions')
.post(createReaction)

router
.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;
