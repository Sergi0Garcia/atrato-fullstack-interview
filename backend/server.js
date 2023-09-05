const express = require("express");
const app = express();
const PORT = 3000;

app.listen(3000, () => {
  console.log(`Server started on port ${PORT}`);
});

app.get('/', function(req, res){
    res.send('Hello from backend')    
})
