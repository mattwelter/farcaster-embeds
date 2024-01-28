import Head from 'next/head'
import { BASE_URL } from './utils'

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Frame" />
        <meta property="og:image" content={`${BASE_URL}/start.png`} />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content={`${BASE_URL}/start.png`} />
        <meta property="fc:frame:button:1" content="Yes" />
        <meta property="fc:frame:button:2" content="No" />
        <meta property="fc:frame:post_url" content={`${BASE_URL}/api/polls`} />
      </Head>
    </>
  )
}