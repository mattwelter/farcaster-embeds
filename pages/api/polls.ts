import type { NextApiRequest, NextApiResponse } from 'next'

import generateFarcasterFrame from '../utils'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' })
    return
  }

  const signedMessage = req.body as {
    untrustedData: {
      fid: number
      url: string
      messageHash: string
      timestamp: number
      network: number
      buttonIndex: number
      castId: { fid: number; hash: string }
    }
    trustedData?: {
      messageBytes: string
    }
  }

  const choice = signedMessage.untrustedData.buttonIndex

  let html: string = ''

  if (choice === 1) {
    html = generateFarcasterFrame(`https://farcaster-embeds.vercel.app/result.png`, choice)
  } else {
    html = generateFarcasterFrame(`https://farcaster-embeds.vercel.app/result.png`, choice)
  }

  return res.status(200).setHeader('Content-Type', 'text/html').send(html)
}