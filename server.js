var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style2.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/black_man.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'black_man.gif'));
});


app.get('/ui/body_bg.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'body_bg.gif'));
});


app.get('/ui/body_bl.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'body_bl.gif'));
});
3

app.get('/ui/body_br.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'body_br.gif'));
});

app.get('/ui/body_tl.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'body_tl.gif'));
});

app.get('/ui/body_tr.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'body_tr.gif'));
});

app.get('/ui/box_b.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'box_b.gif'));
});


app.get('/ui/box_bg.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'box_bg.gif'));
});

app.get('/ui/box_br.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'box_br.gif'));
});

app.get('/ui/box_t.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'box_t.gif'));
});

app.get('/ui/divider_cut.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'divider_cut.gif'));
});

6

app.get('/ui/divider_h.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'divider_h.gif'));
});

app.get('/ui/divider_v.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'divider_v.gif'));
});

app.get('/ui/img01.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'img01.gif'));
});

app.get('/ui/left_photo.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'left_photo.jpg'));
});

app.get('/ui/title_join_my_club.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'title_join_my_club.gif'));
});

app.get('/ui/title_welcome.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'title_welcome.gif'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
