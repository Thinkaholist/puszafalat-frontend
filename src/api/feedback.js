import fetch from 'node-fetch';

export default async function handler(req, res) {
  const url = process.env.SLACK_WEBHOOK_URL;

  const headers = {
    'Content-Type': 'application/json',
  };

  const data = {
    text: req.body.title,
  };

  try {
    const result = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    }).then((res) => {
      return res.json();
    });
    res.json(result);
  } catch (err) {
    res.status(500).send(error);
  }
}
