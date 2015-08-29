var express = require('express');
var app = express();
app.use(express.static(__dirname + '/dist/src/app')); //James added /src/app to fix this.
app.get('*', function(req, res){
    res.sendFile(__dirname + '/dist/src/app/index.html');
});
app.listen(process.env.PORT || 3000);
console.log("App listening.");

//Use angular html 5 mode

/* Route url fragment #

 */