// var config = require('config');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
const user = require('./routes/user.js')(app);
// const jobdarairy = require('./routes/jobdariary.js')(app);

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// const userRoute = require('./route/userRoute.js')(app, passport);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // 모든 도메인으로부터 수신되는 액세스 요청을 허용 (모든 ip주소에서부터 오는 요청을 전부다 허락해 주겠다)
  res.header("Access-Control-Request-Headers", "*");
  res.header("Access-Control-Allow-Headers", "Authorization,Content-Type, Origin, X-Requested-With,  Accept");
  next(createError(404));
});

app.listen(3001,function(req,res){
  console.log('server connect success')
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
