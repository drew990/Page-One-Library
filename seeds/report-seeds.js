const { Report } = require('../models');

const reportdata = [
  {
    title: 'Harry Potter and the poopy butt',
    report_url: 'urlid.com',
    report_author: null,
    report_content: 'I loved it!!!',
    report_score: 5,
    user_id: 1,
  },
  {
    title: 'Harry Potter and the poopy butt',
    report_url: 'urlid.com',
    report_author: null,
    report_content: 'I loved it!!!',
    report_score: 5,
    user_id: 1,
  },  {
    title: 'Harry Potter and the poopy butt',
    report_url: 'urlid.com',
    report_author: null,
    report_content: 'I loved it!!!',
    report_score: 5,
    user_id: 1,
  },  {
    title: 'Harry Potter and the poopy butt',
    report_url: 'urlid.com',
    report_author: null,
    report_content: 'I loved it!!!',
    report_score: 5,
    user_id: 1,
  },  {
    title: 'Harry Potter and the poopy butt',
    report_url: 'urlid.com',
    report_author: null,
    report_content: 'I loved it!!!',
    report_score: 5,
    user_id: 1,
  },]
const seedReports = () => Post.bulkCreate(reportdata);

module.exports = seedReports;
