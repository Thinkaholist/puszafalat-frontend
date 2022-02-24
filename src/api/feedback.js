import fetch from 'node-fetch';

export default async function handler(req, res) {
  console.log(req);
  const url =
    'https://hooks.slack.com/services/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';

  const headers = {
    'Content-Type': 'application/json',
  };

  const data = {
    type: req.body.type,
    title: req.body.title,
    description: req.body.description,
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
