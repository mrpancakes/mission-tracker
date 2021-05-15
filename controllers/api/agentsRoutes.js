//get post put and delete 
////get the user input for each agents thing when youre creating the agent
//i dont think we need this i think we can put it all in userRoutes
const router = require('express').Router();
const {
  Agents,
  User
} = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newAgent = await Agents.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newAgent);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const agentData = await Agents.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!agentData) {
      res.status(404).json({
        message: 'No agent found with this id!'
      });
      return;
    }

    res.status(200).json(agentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  console.log("Updating Post");
  try {
    const updatePost = await Post.update({
      ...req.body
    }, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(updatePost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/:id/comment', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
      post_id: req.params.id
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;