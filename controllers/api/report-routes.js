const router = require('express').Router();
const { Report, User } = require('../../models');
const sequelize = require('../../config/connection')

router.get('/', (req, res) => {
    Report.findAll({
        order: [['created_at', 'DESC']],
        attributes: [
            'id',
            'report_url',
            'title',
            'created_at',
            'report_author',
            'report_score',
            'user_id'
        ], include:[
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbReportData => res.json (dbReportData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})

router.get('/:id', ( req, res) => {
     Report.findOne({
         where: {
             id: req.params.id
         },
         attributes: [
            'id',
            'report_url',
            'title',
            'created_at',
            'report_author',
            'report_score',
            'user_id',
            'report_content'
         ],
         include: [
             {
                 models: User,
                 attributes: ['username']
             }
         ]
     })
     .then(dbReportData => {
         if (!dbReportData) {
             res.status(404).json({ message: 'No book report found with this id'});
             return;
         }
         res.json(dbReportData)
     })
     .catch(err => {
         console.log(err);
         res.status(500).json(err)
     })
})

router.post('/', (req, res) => {
     Report.create({
         title: req.body.title,
         report_url: req.body.report_url,
         user_id: req.body.user_id,
         report_author: req.body.author,
         report_score: req.body.score,
         report_content: req.body.content
     })
     .then(dbReportData => res.json(dbReportData))
     .catch(err => {
       console.log(err);
       res.status(500).json(err);
     });
});

router.put('/', (req, res) => {
    Report.update(
        {
            title:req.body.title
        },
        {
          where: {
            id: req.params.id
          }
        }
      )
        .then(dbReportData => {
          if (!dbReportData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
          }
          res.json(dbReportData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    
})

router.delete('/:id', (req, res) => {
  Report.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbReportData => {
      if (!dbReportData) {
        res.status(404).json({ message: 'No report found with this id' });
        return;
      }
      res.json(dbReportData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})



module.exports = router;