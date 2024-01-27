export default function handler(req, res) {
  if (req.method === 'POST') {
    // Check if Content-Type is application/octet-stream
    if (req.headers['content-type'] === 'application/octet-stream') {
      // Assuming the body is parsed from octet-stream to JSON object
      let body = ''; // Initialize body string
      req.on('data', chunk => {
        body += chunk.toString(); // Convert Buffer to string and append
      });
      req.on('end', () => {
        const postData = JSON.parse(body); // Parse the string to JSON
        if (postData.valid === true) {
          // Create a string of HTML content with canvas
          const htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
              <title>Display FID</title>
            </head>
            <body>
              <canvas id="fidCanvas" width="400" height="200" style="border:1px solid #000;"></canvas>
              <script>
                var canvas = document.getElementById('fidCanvas');
                var ctx = canvas.getContext('2d');
                ctx.font = '30px Arial';
                ctx.fillText('FID: ${postData.message.data.fid}', 10, 50);
              </script>
            </body>
            </html>
          `;

          // Set header to text/html and send the HTML content
          res.setHeader('Content-Type', 'text/html');
          res.status(200).send(htmlContent);
        } else {
          res.status(400).send('Invalid request body');
        }
      });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(415).send('Unsupported Media Type. Expected application/octet-stream');
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
