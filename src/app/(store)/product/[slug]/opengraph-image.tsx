/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og'
import colors from 'tailwindcss/colors'

export const alt = ''

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  const productImageURL = new URL(
    '/moletom-ai-side.png',
    'http://localhost:3000',
  ).toString()

  return new ImageResponse(
    (
      <div
        style={{
          background: colors.zinc[950],
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img
          src={productImageURL}
          alt=""
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    ),
    {
      ...size,
    },
  )
}
