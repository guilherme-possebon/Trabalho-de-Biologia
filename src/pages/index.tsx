import WhereWeFind from '@/Components/WhereWeFind'
import WhatIs from '@/Components/WhatIs'
import TransmissionsRisks from '@/Components/TransmissionsRisks'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Trabalho Biologia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="h-screen">
        <WhatIs />
        <TransmissionsRisks />
        <WhereWeFind />
      </div>
    </>
  )
}
