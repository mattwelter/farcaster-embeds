export default function generateFarcasterFrame(image: string, choice: number, fid: string) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="${image}" />
      <meta property="fc:frame:post_url" content="https://farcaster-embeds.vercel.app/api/post" />
      <Followers fid=${fid}/>
    </head>
    <body>
      
    </body>
    </html>
  `
}
