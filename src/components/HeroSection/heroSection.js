import React from 'react';
import { Card } from '../Cards/card';
import { HeroContainer } from './style';

export const HeroSection = () => {
  const cardInfo = [
    {
      title: 'CLOUD',
      img: '/images/wave.svg'
    },
    {
      title: 'STATUS',
      img: '/images/wave1.svg'
    },
    {
      title: 'INVENTORY',
      img: '/images/wave.svg'
    },
    {
      title: 'HISTORY',
      img: '/images/wave1.svg'
    },
  ]
  return (
    <HeroContainer>
      {cardInfo.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          img={card.img}
        />
      ))}
    </HeroContainer>
  )
}
