export default function generateFarcasterFrame(image: any, choice: number, fid: string) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="${image}" />
      <meta property="fc:frame:post_url" content="https://farcaster-embeds.vercel.app/api/post" />
    </head>
    <body>
      
    </body>
    </html>
  `
}
