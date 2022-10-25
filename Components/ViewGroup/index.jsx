import React from "react";

import styled from 'styled-components'

const ViewGroup = ({ group, fixture, tablePosition, tableGoals }) => {
  return(
    <>
      <Title>GRUPO {group}</Title>
      <SubTitles>FIXTURE</SubTitles>
      <WrapperTableFixture>
      {fixture}
      </WrapperTableFixture>

      <SubTitles>TABLA DE POSICIONES</SubTitles>
      <WrapperTablePosition>
        {tablePosition}
      </WrapperTablePosition>

      <SubTitles>TABLA DE GOLEADORES</SubTitles>
      <WrapperTableGoals>
        {tableGoals}
      </WrapperTableGoals>
    </>
  )
}

export default ViewGroup

const Title = styled.h2`
  font-size: 50px;
  font-family: FTitle, Arial;
  text-align: center;
  color: white;
  padding: 20px 0;
`
const SubTitles = styled.h2`
  font-size: 34px;
  letter-spacing: 1.5px;
  font-family: FTitle, Arial;
  text-align: center;
  color: white;
  padding: 20px 0;
  
  &&::after{
    content: "";
    display: block;
    background-color: #FF4B89;
    width: 450px;
    margin: 20px auto 0;
    height: 5px;
  }
`
const WrapperTableFixture = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  margin: 0 auto;
  background-color: peru;
`
const WrapperTablePosition = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  margin: 0 auto;
  background-color: skyblue;
`
const WrapperTableGoals = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  margin: 0 auto;
  background-color: aquamarine;
`