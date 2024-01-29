import { NextApiRequest } from 'next'
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export default async function handler(req: NextApiRequest) {
  const url = new URL(req.url || '')
  const fid = Number(url.searchParams.get('fid'))

  // fetch your data here and use it in the image

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          color: 'black',
          fontSize: '5rem',
        }}
      >
        <span>Hello FID {fid}</span>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
