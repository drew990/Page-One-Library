const router = require("express").Router();
const sequelize = require("../config/connection");
const { Report, User, Comment } = require("../models");

router.get("/", (req, res) => {
  Report.findAll({
    // Attribution not needed and can just include model

    include: [
      {
        model: Comment,
        attributes: [
          "id",
          "comment_text",
          "report_id",
          "user_id",
          "created_at",
        ],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbReportData) => {
      const reports = dbReportData.map((report) => report.get({ plain: true }));
      console.log(reports);

      res.render("homepage", {
        // reports is the variable that I'll be grabbing
        reports,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  // Need a login check to make sure password and email match

  res.render("login");
});

router.get("/report/:id", (req, res) => {
  Report.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "report_url",
      "title",
      "created_at",
      "report_author",
      "report_score",
      "user_id",
    ],
    include: [
      {
        model: Comment,
        attributes: [
          "id",
          "comment_text",
          "report_id",
          "user_id",
          "created_at",
        ],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbReportData) => {
      if (!dbReportData) {
        res.status(404).json({ message: "No report found with this id" });
        return;
      }

      // serialize the data
      const report = dbReportData.get({ plain: true });

      // pass data to template
      res.render("single-post", {
        report,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

router.get("/new", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
    return;
  } else {
    res.render("create-report", {
      loggedIn: req.session.loggedIn,
    });
  }
});
