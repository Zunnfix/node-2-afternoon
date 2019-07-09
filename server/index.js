const express = require('express');
const mc = require("./controllers/messages_controller");
const PORT = 3002;

const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

const messagesBaseUrl = "/api/messages";
app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})

