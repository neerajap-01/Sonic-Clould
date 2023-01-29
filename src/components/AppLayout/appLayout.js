import React from 'react'
import Head from 'next/head'
import { Body } from './style';
import { Layout } from 'antd';
import NavBar from '../NavBar/navBar';
import { HeroSection } from '../HeroSection/heroSection';
import Waves from '../Waves/wave';

const App = () => {
  return (
    <>
      <Head>
          <title>Sonic Cloud</title>
          <meta name="description" content="Seamless Ticket Rasing Site" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/sonicCloud_logo.jpeg" />
      </Head>
      <Body>
        {/* <Layout> */}
          <NavBar />
          <HeroSection />
          <Waves />
        {/* </Layout> */}
      </Body>
    </>
  )
}

export default App;