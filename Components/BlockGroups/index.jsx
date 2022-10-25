import React from 'react'

import styled from 'styled-components'
import { DateCountry } from 'const'
import Country from './Country'

const BlockGroup = ({ title, n, redirect }) => {
  return (
    <ContentGroup>
      <Redirect href={redirect}>
        <WrapperTitle>
          <TitleGroup>{title}</TitleGroup>
        </WrapperTitle>
      </Redirect>
        <WrapperPaises>
          {
            DateCountry[n].map((item, i) => {
              return(
                <>
                  <Country
                    key={i}
                    image={item.image}
                    name={item.country}
                    url={item.url}
                    // url={"https://especiales.larepublica.pe/mundial-qatar-2022-clasificados-grupos-fixture-tabla-de-posiciones-horarios-partidos-copa-del-mundo-fifa-dpts" + item.url + "/"}
                  />
                </>
              )
            })
          }
        </WrapperPaises>
    </ContentGroup>
  )
}

export default BlockGroup

const ContentGroup = styled.div`
  height: auto;
  width: 100%;
  /* background-color: blue; */
  margin: 30px auto 75px;
  border-top: 1px solid white;
  border-left: 1px solid white;
  border-right: 1px solid white;
  @media (max-width: 488px){
    margin-bottom: 70px;
    padding-bottom: 0;
  }
`
const WrapperTitle = styled.div`
  position: relative;
  top: -15px;
  background-color: #FD3665;
  width: 140px;
  height: 30px;
  margin: 0 auto;
  border-radius: 5px;
  border: 1px solid white;
  /* -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg); */
  &:hover{
    transition: 0.5s;
    /* opacity: 0.8; */
    cursor: pointer;
    box-shadow: -1px 2px 15px -1px rgba(0,0,0,0.75);
    -webkit-box-shadow: -1px 2px 15px -1px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 2px 15px -1px rgba(0,0,0,0.75);
  }
`
const TitleGroup = styled.h2`
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: white;
  font-weight: 900;
  width: auto;

  @media (max-width: 550px){
    font-size: 18px;
  }
  /* -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg); */
`
const WrapperPaises = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  /* background-color: peru; */
  margin-top: 10px;
  width: 100%;
  height: auto;
  `
const Redirect = styled.a`
  text-decoration: none;
`