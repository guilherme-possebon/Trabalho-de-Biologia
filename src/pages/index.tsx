import Slide from '@/Components/Slide'
import WhatIs from '@/Components/WhatIs'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Trabalho Biologia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="h-screen bgcolor">
        <WhatIs />
        <Slide />
      </div>
    </>
  )
}
