module.exports = function handler(req, res) {
  const clientId = process.env.GITHUB_CLIENT_ID || 'Ov23liZMwmNxp54dDXnE';
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo,user`);
};
