import cookie from 'cookie';

const handler = (req, res) => {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = process.env.TOKEN;
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('token', token, {
          maxAge: 60 * 60, // Set the cookie expiration time (in seconds)
          sameSite: 'strict',
          path: '/',
        })
      );
      res.status(200).json('success');
    } else {
      res.status(400).json('Wrong credentials');
    }
  }
};

export default handler;
