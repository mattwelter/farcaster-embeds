export default function generateFarcasterFrame(image: any) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta property="og:title" content="Frame" />
        <meta property="og:image" content='https://farcaster-embeds.vercel.app/start.png' />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${image}" />
        <meta property="fc:frame:post_url" content="https://farcaster-embeds.vercel.app/api/post" />
    </head>
    <body>
      
    </body>
    </html>
  `
}
