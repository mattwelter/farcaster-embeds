import Image from "next/image";
import { Inter } from "next/font/google";

import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://farcaster-embeds.vercel.app/start.png" />
        <meta property="fc:frame:button:1" content="Red" />
        <meta property="fc:frame:button:2" content="Blue" />
        <meta property="fc:frame:post_url" content="https://farcaster-embeds.vercel.app/api/polls" />

        <meta property="og:title" content="TEST" />
        <meta property="og:image" content="https://farcaster-embeds.vercel.app/start.png" />
      </Head>
    </main>
  );
}
