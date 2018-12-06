const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('/build'));
app.listen(process.env.PORT || 8080);

//PATH LOCATION STARTEGY

app.get('*', function (req, res) {
  const index = path.join('index.html');
  console.log('FETCHING FROM : ' + index);

  res.sendFile(index);
});

console.log('Server started running..');
