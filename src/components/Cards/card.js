import React from 'react'
import { CardContainer, CardBody, CardDetails, CardTitle } from './style';

export const Card = (props) => {
  return (
    <CardContainer image={props.img}>
      <CardDetails>
        <CardTitle>{props.title}</CardTitle>
        {/* <CardBody>Card Body</CardBody> */}
      </CardDetails>
      <button className='card-button'>
        View
      </button>
    </CardContainer>
  )
}
