export default function handler(req, res) {
  if (req.method === 'POST') {
    res.setHeader('Content-Type', 'text/html');

    // Create a string of HTML content
    const htmlContent = `
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://farcaster-embeds.vercel.app/result.png" />
        <meta property="og:title" content="TEST" />
        <meta property="og:image" content="https://farcaster-embeds.vercel.app/start.png" />
      </head>
    `;

    // Send the HTML content
    res.status(200).send(htmlContent);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
