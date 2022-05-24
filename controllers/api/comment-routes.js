const router = require("express").Router();
const { Report, User, Comment } = require("../../models");
const sequelize = require("../../config/connection");

router.get("/", (req, res) => {
  Comment.findAll({})
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

<<<<<<< HEAD
router.get("/:id", (req, res) => {
  Comment.findAll({
    where: {
      id: req.params.id,
    },
=======
router.post("/", (req, res) => {
  Comment.create({
    comment_text: req.body.comment_text,
    user_id: req.body.user_id,
    report_id: req.body.report_id,
>>>>>>> develop
  })
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
<<<<<<< HEAD
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  console.log("LOOK AT ME FOR REQ BODY COMMENT:", req.body, req.session);

  Comment.create({
    comment_text: req.body.comment_text,
    user_id: req.session.user_id,
    report_id: req.body.post_id,
    post_id: req.body.post_id,
  })
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

=======
      res.status(400).json(err);
    });
});

>>>>>>> develop
router.delete("/:id", (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCommentData) => {
      if (!dbCommentData) {
        res
          .status(404)
          .json({ message: "There is no comment with this ID found" });
        return;
      }
      res.json(dbCommentData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
