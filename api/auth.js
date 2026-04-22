export default function handler(req, res) {
  const { GITHUB_CLIENT_ID } = process.env;
  const scope = 'repo,user';
  const redirectUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=${scope}`;
  res.redirect(redirectUrl);
}
