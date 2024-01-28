export default function generateFarcasterFrame(image: string, choice: number) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="${image}" />
      <meta property="fc:frame:post_url" content="https://farcaster-embeds.vercel.app/api/post" />

      ${
        choice === 2
          ? '<meta property="fc:frame:button:1" content="Yes" />'
          : ''
      }
    </head>
    <body>
      
    </body>
    </html>
  `
}
