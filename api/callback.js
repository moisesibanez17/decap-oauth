module.exports = async function handler(req, res) {
  const { code } = req.query;
  const clientId = 'Ov23liZMwmNxp54dDXnE';
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  const response = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
  });

  const data = await response.json();

  if (data.access_token) {
    const html = `<!DOCTYPE html><html><body><script>
      (function() {
        function receiveMessage(e) {
          window.opener.postMessage(
            'authorization:github:success:{"token":"${data.access_token}","provider":"github"}',
            e.origin
          );
        }
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", "*");
      })();
    <\/script></body></html>`;
    res.setHeader('Content-Type', 'text/html');
    res.send(html);
  } else {
    res.status(400).send('OAuth error: ' + JSON.stringify(data));
  }
};
