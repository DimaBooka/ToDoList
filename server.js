const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const jsonfile = require('jsonfile');
const file = 'items.json';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));


app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
});


app.get('/api/items/', (req, res) => {

  const items = jsonfile.readFileSync(file);
  res.send(items);

});

app.post('/api/items/', (req, res) => {

  const request = req.body;
  if (!request.content) {
    return res.status(400).send({'error': 'Dude, fill the input'});
  }

  let items = jsonfile.readFileSync(file);
  let id = items.length > 0 ? items[items.length - 1].id + 1 : 1;

  let obj = {
    id: id,
    content: request.content,
    status: false
  };

  items.push(obj);
  jsonfile.writeFileSync(file, items, {spaces: 2});

  res.send({'success': 'Dude, item was successfully created'});
});

app.delete('/api/items/:id', (req, res) => {

  let items = jsonfile.readFileSync(file);

  items = items.filter((item, index) => {
    return item['id'] != req.params.id
  });
  jsonfile.writeFileSync(file, items, {spaces: 2});
  res.send({'success': 'Dude, item was successfully deleted'});

});

app.patch('/api/items/:id', (req, res) => {

  const request = req.body;
  console.log(request);
  if (!request.content || typeof request.status !== 'boolean') {
    return res.status(400).send({'error': 'Dude, not all data was provided'});
  }

  let items = jsonfile.readFileSync(file);

  let index = items.findIndex((obj => obj.id == req.params.id));
  items[index].content = request.content;
  items[index].status = request.status;
  jsonfile.writeFileSync(file, items, {spaces: 2});
  res.send({'success': 'Dude, item was successfully updated'})
});

app.listen(process.env.PORT || 8080);
