import { Board } from '@/components/Board'
import { NavBar } from '@/components/NavBar'
import Head from 'next/head'
import Modal from 'react-modal';

Modal.setAppElement('#app');

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="app">
        <NavBar />

        <Board />
      </main>
    </>
  )
}
