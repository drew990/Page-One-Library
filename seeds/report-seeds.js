const { Report } = require('../models');

const reportdata = [
  {
[
	{
		"title": "Book Test",
		"created_at": "2022-05-12T13:56:04.000Z",
		"report_author": "Author Test",
		"score": 1,
		"user_id": 6,
		"url": "meh.com",
		"content": "It was alright"
		},
  {
    "title": "Clifford the Big Red Dog",
    "created_at": "2022-05-12T13:56:04.000Z",
    "report_author": "Author Test",
    "score": 5,
    "user_id": 6,
    "url": "meh.com",
    "content": "It was alright"
  },
  {
    "title": "Clifford the Big Red Dog",
    "created_at": "2022-05-12T13:56:04.000Z",
    "report_author": "Author Test",
    "score": 3,
    "user_id": 6,
    "url": "meh.com",
    "content": "It was alright"
  },
  {
    "title": "Book Test",
    "created_at": "2022-05-12T13:56:04.000Z",
    "report_author": "Author Test",
    "score": 4,
    "user_id": 3,
    "url": "meh.com",
    "content": "It was alright"
  },
  {
    "title": "Book Test",
    "created_at": "2022-05-12T13:56:04.000Z",
    "report_author": "Author Test",
    "score": 4,
    "user_id": 4,
    "url": "meh.com",
    "content": "It was alright"
  }
]
}]

const seedReports = () => Post.bulkCreate(reportdata);

//module.exports = seedReports;
