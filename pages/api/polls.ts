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

  const html = generateFarcasterFrame(
    `https://farcaster-embeds.vercel.app/api/image/${signedMessage.untrustedData.fid}`
  )

  return res.status(200).setHeader('Content-Type', 'text/html').send(html)
}
