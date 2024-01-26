// pages/api/polls.js

export default function handler(req, res) {
  // Handle GET requests
  if (req.method === 'GET') {
    // Set Content-Type to text/html
    res.setHeader('Content-Type', 'text/html');

    // Create a string of HTML content
    const htmlContent = `
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="start.png" />
      <meta property="fc:frame:button:1" content="Green" />
      <meta property="fc:frame:button:2" content="Purple" />
      <meta property="fc:frame:button:3" content="Red" />
      <meta property="fc:frame:button:4" content="Blue" />
    `;

    // Send the HTML content
    res.status(200).send(htmlContent);
  } else if (req.method === 'POST') {
    res.setHeader('Content-Type', 'text/html');

    // Create a string of HTML content
    const htmlContent = `
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="result.png" />
    `;

    // Send the HTML content
    res.status(200).send(htmlContent);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
