import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Frame" />
        <meta property="og:image" content={`https://farcaster-embeds.vercel.app/start.png`} />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content={`https://farcaster-embeds.vercel.app/start.png`} />
        <meta property="fc:frame:button:1" content="View chart" />
        <meta property="fc:frame:post_url" content={`https://farcaster-embeds.vercel.app/api/polls`} />
      </Head>
    </>
  )
}