const CLIENT_ID = 'Ov23liZMwmNxp54dDXnE';

module.exports = function handler(req, res) {
  res.redirect('https://github.com/login/oauth/authorize?client_id=' + CLIENT_ID + '&scope=repo,user');
};
