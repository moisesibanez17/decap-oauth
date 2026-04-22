module.exports = function handler(req, res) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const scope = 'repo,user';
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${clientId}&scope=${scope}`);
};
