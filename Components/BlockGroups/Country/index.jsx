import React from 'react'

import styled from 'styled-components'

const Country = ({ url, image, name }) => {
  return (
    <>
      <Redirect href={url}>
        <WrapperImage>
          <ImageCountry src={image} alt='bandera' />
          <NameCountry>{name}</NameCountry>
        </WrapperImage>
      </Redirect>
    </>
  )
}

export default Country

const WrapperImage = styled.div`
  height: auto;
  width: 117px;
  border-radius: 30px;
  @media (max-width: 550px){
    width: 80px;
    padding: 0 10px;
  }
`
const ImageCountry = styled.img`
  border-radius: 100px;
  height: 100%;
  width: 100%;
  
  &:hover{
    transition: 0.5s;
    /* opacity: 0.8; */
    cursor: pointer;
    box-shadow: -1px 2px 15px -1px rgba(0,0,0,0.75);
    -webkit-box-shadow: -1px 2px 15px -1px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 2px 15px -1px rgba(0,0,0,0.75);
  }
`
const Redirect = styled.a`
  text-decoration: none;
`
const NameCountry = styled.h2`
  font-size: 18px;
  color: white;
  text-align: center;
  margin: 10px 0;
  font-family: FTitle, Arial;
  @media (max-width: 550px){
    font-size: 14px;
  }
`