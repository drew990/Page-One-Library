const router = require('express').Router();
const { json } = require('express/lib/response');
const { User, Report } = require('../../models');
const { route } = require('./report-routes');


router.get('/', (req, res) => {
    User.findAll({
        attributes: {exclude: ['password']}
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        })
});

router.get('/:id', (req,res) =>{
    User.findOne({
        attributes: {exclude:['password']},
        include: [
            {
                model: Report,
                attributes: [
                'id',
                'report_url',
                'title',
                'created_at',
                'report_author',
                'report_score',
                'user_id',
                'report_content']
            },
            {
                model: Comment,
                attributes: [
                    'id',
                    'comment_text',
                    'created_at',
                ],
                include:{
                    model: Report,
                    attributes: [title]
                }

            }
        ],
        where:{
            id:req.params.id
        }
    })
    .then(dbUserData =>{
        if(!dbUserData){
            res.status(404).json({message: 'No user with this ID was found'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbUserData => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json(dbUserData)
      })
    })
});

router.post('/login', (req, res) => {
    // query operation
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'No user with that email address'});
            return;
        }
        const validPassword = dbUserData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect Password!'});
            return;
        }
        res.json({ user: dbUserData, message: 'You are now logged in!'})

    })
})

router.put('/:id', (req, res) => {
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  
    // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
    User.update(req.body, {
      individualHooks: true, 
      where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData[0]) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.delete('/:id', (req, res) => {
    User.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;