// pages/api/polls.js

export default function handler(req, res) {
   if (req.method === 'POST') {
    res.setHeader('Content-Type', 'text/html');

    // Create a string of HTML content
    const htmlContent = `
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="https://farcaster-embeds.vercel.app/result.png" />
    `;

    // Send the HTML content
    res.status(200).send(htmlContent);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
