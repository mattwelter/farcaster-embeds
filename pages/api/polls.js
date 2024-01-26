// pages/api/polls.js

export default function handler(req, res) {
  // Handle GET requests
  if (req.method === 'GET') {
    res.status(200).json({
      meta: [
        { property: "fc:frame", content: "vNext" },
        { property: "fc:frame:image", content: "start.png" },
        { property: "fc:frame:button:1", content: "Green" },
        { property: "fc:frame:button:2", content: "Purple" },
        { property: "fc:frame:button:3", content: "Red" },
        { property: "fc:frame:button:4", content: "Blue" }
      ]
    });
  }
  // Handle POST requests
  else if (req.method === 'POST') {
    res.status(200).json({
      meta: [
        { property: "fc:frame", content: "vNext" },
        { property: "fc:frame:image", content: "result.png" }
      ]
    });
  }
  // Handle any other methods
  else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
