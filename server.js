const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const jsonfile = require('jsonfile');
const file = 'items.json';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));


app.get('/api/items/', (req, res) => {

  const items = jsonfile.readFileSync(file);
  res.send(items);

});

app.post('/api/items/', (req, res) => {

  const request = req.body;
  if (!request.content) {
    res.status(400).send({'error': 'Content is required'})
  }
  let obj = {
    id: items.length + 1,
    content: request.content,
    status: false
  };

  let items = jsonfile.readFileSync(file);

  items.push(obj);
  jsonfile.writeFileSync(file, items, {spaces: 2});

  res.send({'success': 'Item was successfully added'});

});

app.delete('/api/items/:id', (req, res) => {

  let items = jsonfile.readFileSync(file);

  items = items.filter((item, index) => {
    return item['id'] != req.params.id
  });
  jsonfile.writeFileSync(file, items, {spaces: 2});
  res.send({'success': 'Item was successfully deleted'});

});

app.patch('/api/items/:id', (req, res) => {

  const request = req.body;
  if (!request.content || !request.status) {
    res.status(400).send({'error': 'Content and status is required'})
  }

  let items = jsonfile.readFileSync(file);

  let index = items.findIndex((obj => obj.id == req.params.id));
  items[index].content = request.content;
  items[index].status = request.status;
  jsonfile.writeFileSync(file, items, {spaces: 2});
  res.send({'success': 'Item was successfully updated'})
});

app.listen(process.env.PORT || 8080);
