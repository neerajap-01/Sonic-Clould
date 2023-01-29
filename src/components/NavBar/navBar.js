import React from 'react'
import  { Layout, Menu, theme } from 'antd'
import Image from 'next/image';
import { NavBarLayout, Header } from './style';

const { Footer, Content } = Layout

const NavBar = () => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <NavBarLayout>
      <Header>
        <Image className='logo' src='/images/seamless_logo.png' alt='seamless_logo' width={140} height={52}/>
        <Menu 
          style={{
            padding: '16px 16px',
            fontFamily: 'Helvetica',
            fontSize: '20px',
            fontWeight: '600',
            cursor: 'pointer',
            verticalAlign: 'middle',
            background: 'none',
            color: 'white',
          }}
          mode="horizontal" 
          items={[{
            key: 'home',
            label: 'Home',
          },
          {
            key: 'probfile',
            label: 'Profile',
          }
        ]}
        />
      </Header>
    </NavBarLayout>
  )
}

export default NavBar