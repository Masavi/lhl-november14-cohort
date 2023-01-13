const express = require('express');
const cookieSession = require('cookie-session');

const app = express();

// MIDDLEWARES
const cookieSessionConfig = cookieSession({
  name: 'myCookie',
  keys: ['verysecret'],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
});

app.use(cookieSessionConfig);

// ROUTES
app.get('/', (req, res) => {
  // Update views
  req.session.views = (req.session.views || 0) + 1

  // Write response
  res.end(req.session.views + ' views');
})


app.listen(4000, () => console.log('Listening on 4000...'));