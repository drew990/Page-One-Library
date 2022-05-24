const router = require("express").Router();
const { Report, User, Comment } = require("../../models");
const sequelize = require("../../config/connection");
<<<<<<< HEAD
const res = require("express/lib/response");
=======
>>>>>>> develop

router.get("/", (req, res) => {
  Report.findAll({
    order: [["created_at", "DESC"]],
    attributes: [
      "id",
      "title",
      "created_at",
      "report_author",
      "report_score",
      "user_id",
    ],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbReportData) => res.json(dbReportData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
<<<<<<< HEAD

router.get("/:id", (req, res) => {
  Report.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      { model: User, attributes: ["username"] },
      {
        model: Comment,
        attributes: ["id", "comment_text", "report_id", "user_id"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    .then((dbReportData) => {
      if (!dbReportData) {
        res.status(404).json({ message: "No book report found with this id" });
        return;
      }
      res.json(dbReportData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  Report.update({});
=======

router.get("/:id", (req, res) => {
  Report.findOne({
    include: [
      { model: User, attributes: ["username"] },
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    .then((dbReportData) => {
      if (!dbReportData) {
        res.status(404).json({ message: "No book report found with this id" });
        return;
      }
      res.json(dbReportData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
>>>>>>> develop
});

router.post("/", (req, res) => {
  console.log("BODY", req.body);

  Report.create({
    title: req.body.title,
    user_id: req.body.user_id,
    report_author: req.body.author,
    report_score: req.body.score,
    report_url: req.body.url,
    report_content: req.body.content,
    user_id: req.session.user_id,
  })
    .then((dbReportData) => res.json(dbReportData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/", (req, res) => {
  Report.update(
    {
      title: req.body.title,
      report_score: req.body.score,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbReportData) => {
      if (!dbReportData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbReportData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Report.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbReportData) => {
      if (!dbReportData) {
        res.status(404).json({ message: "No report found with this id" });
        return;
      }
      res.json(dbReportData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
