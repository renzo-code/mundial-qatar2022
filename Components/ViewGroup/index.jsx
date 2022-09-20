import React from "react";

import styled from 'styled-components'

const ViewGroup = () => {
  return(
    <>
      <WrapperTitle>
        <TitleImg src="./images/title-group-a.png"/>
      </WrapperTitle>
      <WrapperTableFixture>

      </WrapperTableFixture>

      <WrapperTitle>
        <TitleImg src="./images/table-positions.png"/>
      </WrapperTitle>
      <WrapperTablePosition>

      </WrapperTablePosition>

      <WrapperTitle>
        <TitleImg src="./images/table-goals.png"/>
      </WrapperTitle>
      <WrapperTableGoals>

      </WrapperTableGoals>
    </>
  )
}

export default ViewGroup

const WrapperTitle = styled.div`
  width: 500px;
  height: auto;
  margin: 0 auto;
`
const TitleImg = styled.img`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const WrapperTableFixture = styled.div`
  height: 550px;
  width: 600px;
  background-color: peru;
  margin: 0 auto;
`
const WrapperTablePosition = styled.div`
  height: 450px;
  width: 600px;
  background-color: skyblue;
  margin: 0 auto;
`
const WrapperTableGoals = styled.div`
  height: 450px;
  width: 400px;
  background-color: aquamarine;
  margin: 0 auto;
`