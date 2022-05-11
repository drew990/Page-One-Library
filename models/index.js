const User = require('./User.js');
const Report = require('./Report')
//const Vote = require('./Vote');
const Comment = require('./Comment')

// create associations

User.hasMany(Report, {
    foreignKey: 'user_id'
})

Report.belongsTo(User, {
    foreignKey: 'user_id'
})

// User.belongsToMany(Report, {
//     through: Vote,
//     as: 'voted_posts',
//     foreignKey: 'user_id'
//   });
  
// Report.belongsToMany(User, {
//     through: Vote,
//     as: 'voted_posts',
//     foreignKey: 'post_id'
// });

// Vote.belongsTo(User, {
//     foreignKey: 'user_id'
//   });
  
// Vote.belongsTo(Report, {
//     foreignKey: 'post_id'
//   });
  
// User.hasMany(Vote, {
//     foreignKey: 'user_id'
//   });
  
// Report.hasMany(Vote, {
//     foreignKey: 'post_id'
//   });

  Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  Comment.belongsTo(Report, {
    foreignKey: 'post_id'
  });
  
  User.hasMany(Comment, {
    foreignKey: 'user_id'
  });
  
  Report.hasMany(Comment, {
    foreignKey: 'post_id'
  });


module.exports = { User, Report, Comment };
