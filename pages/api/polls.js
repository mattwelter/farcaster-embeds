// pages/api/polls.js

export default function handler(req, res) {
  // Check if the request is a GET request
  if (req.method === 'GET') {
    // Return the data as JSON
    res.status(200).json({
      meta: [
        { property: "fc:frame", content: "vNext" },
        { property: "fc:frame:image", content: "http://...image-question.png" },
        { property: "fc:frame:button:1", content: "Green" },
        { property: "fc:frame:button:2", content: "Purple" },
        { property: "fc:frame:button:3", content: "Red" },
        { property: "fc:frame:button:4", content: "Blue" }
      ]
    });
  } else {
    // Handle any non-GET requests
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }




  if (req.method === 'POST') {
    // Return the data as JSON
    res.status(200).json({
      meta: [
        { property: "fc:frame", content: "vNext" },
        { property: "fc:frame:image", content: "http://...image-result.png" },
      ]
    });
  } else {
    // Handle any non-POST requests
    res.setHeader('Allow', ['POSt']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
