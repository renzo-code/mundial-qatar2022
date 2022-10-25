/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styled from 'styled-components'

const ViewCountry = ({
  logoFederation,
  nameCountry,
  imgTeam,
  description,
  nameDT,
  imgDT,
  egeDT,
  bjdDT,
  nameStar, 
  imgStar,
  ageStar,
  teamStar,
  participation,
  majorResult,
  dataInfo,
  dataInfo2
}) => {
  let p1 = bjdDT.split("-")
  return(
    <>
      <WrapperLogo>
        <img alt='Logo de federación' src={logoFederation} />
      </WrapperLogo>
      <NameCountry>{nameCountry}</NameCountry>
      <WrapperTeam>
        <ImageTeam alt='Foto en Equipo' src={imgTeam} />
      </WrapperTeam>
      <Description>
        {description}
      </Description>
      <ContentInfo>
        <BlockOne>
          <h3>EL DT:</h3>
          <h2>{nameDT}</h2>
          <div>
            <img alt='Foto del entrenador' src={imgDT}/>
          </div>
          <h3>{egeDT}</h3>
          <h3>{p1[0]} <br/> {p1[1]}</h3>
        </BlockOne>
        <BlockTwo>
          <h3>LA FIGURA:</h3>
          <h2>{nameStar}</h2>
          <div>
            <img alt='Foto de la figura' src={imgStar}/>
          </div>
          <h3>{ageStar}</h3>
          <h3>Equipo actual:
          <br/>
            {teamStar}
          </h3>
        </BlockTwo>
      </ContentInfo>
      <WrapperDetails>
        <h2>{participation}</h2>
        <h3>Participaciones en mundiales</h3>
        <br/>
        {majorResult && 
          <>
            <br/>
            <h3>Mejor resultado:</h3>
            <br/>
            <h3>{majorResult}</h3>
          </>
        }
        {dataInfo && 
          <>
            <br/>
            <br/>
            <h3>Información Destacada:</h3>
            <br/>
            <br/>
            <h3>{dataInfo}</h3>
          </>
        }
        {dataInfo2 && 
          <>
            <br/>
            <br/>
            <br/>
            <h3>{dataInfo2}</h3>
          </>
        }
      </WrapperDetails>
    </>
  )
}

export default ViewCountry

const WrapperLogo = styled.div`
  height: auto;
  width: 250px;
  margin: 0 auto;
  padding: 40px 0 20px;
  img{
    height: 100%;
    width: 100%;
    padding-bottom: 20px;
  }

  @media (max-width: 600px){
    width: 200px;
  }
  @media (max-width: 450px){
    width: 180px;
  }
  @media (max-width: 400px){
    width: 150px;
  }
`
const NameCountry = styled.h1`
  color: white;
  font-size: 35px;
  font-weight: 900;
  text-align: center;
  font-family: FTitle, Arial;
`
const WrapperTeam = styled.div`
  height: auto;
  width: 65%;
  margin: 0 auto;
  padding-bottom: 40px;
  @media (max-width: 980px){
    width: 100%;
  }

  &&::after{
    display: block;
    content: "";
    height: 3px;
    width: 80%;
    margin: 0 auto 0px;
    background-color: #FE4D84;
  }
  `
const ImageTeam = styled.img`
  height: 100%;
  width: 100%;
`
const Description = styled.h2`
  width: 65%;
  color: white;
  font-weight: 700;
  font-size: 18px;
  margin: 0 auto 40px;
  text-align: center;
  line-height: 21px;
  font-family: FInfo, arial;
  &&::after{
    display: block;
    content: "";
    height: 3px;
    width: 73%;
    margin: 40px auto 0px;
    background-color: #FE4D84;
  }

  @media (max-width: 900px){
    width: 100%;
  }
  @media (max-width: 550px){
    font-size: 17px;
  }
`
const ContentInfo = styled.div`
  display: flex;
  height: auto;
  width: 75%;
  text-align: center;
  margin: 0 auto;
  @media (max-width: 650px){
    width: 100%;
    height: auto;
  }
`
const BlockOne = styled.div`
  width: 50%;
  height: 100%;
  border-right: solid 3px #FE4D84;
  padding-top: 27px;
  padding-bottom: 27px;
  h3{
    color: white;
    font-size: 18px;
    font-weight: 900;
    width: 80%;
    margin: 20px auto 0;
    line-height: 19px;
    font-family: FInfo, arial;
    transform: scaleY(1.1);
    @media (max-width: 650px){
      margin: 5px auto 10px;
      font-size: 16px;
    }
    @media (max-width: 401px){
      font-size: 14px;
    }
  }
  h2{
    color: white;
    font-size: 25px;
    font-weight: 900;
    margin: 5px 20px 10px;
    min-height: 85px;
    line-height: 28px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 650px){
      font-size: 20px;
    }
    @media (max-width: 450px){
      line-height: 24px;
    }
    /* @media (max-width: 670px){
      line-height: 23px;
    } */
  }
  div{
    height: auto;
    width: 250px;
    margin: 0 auto 10px;
    
    img{
      height: 100%;
      width: 100%;
    }
    @media (max-width: 930px){
      width: 200px;
    }
    @media (max-width: 650px){
      width: 160px;
    }
    @media (max-width: 450px){
      width: 150px;
    }
  }
  @media (max-width: 650px){
    padding: 10px 0;
  }
`
const BlockTwo = styled.div`
  width: calc(100% - 50%);
  height: 100%;
  padding-top: 27px;

  h3{
    color: white;
    font-size: 18px;
    font-weight: 900;
    width: 80%;
    margin: 20px auto 0;
    font-family: FInfo, arial;
    transform: scaleY(1.1);
    line-height: 21px;
    @media (max-width: 650px){
      margin: 5px auto 10px;
      font-size: 16px;
    }
    @media (max-width: 401px){
      font-size: 14px;
    }
  }
  h2{
    color: white;
    font-size: 25px;
    font-weight: 900;
    margin: 5px 20px 10px;
    line-height: 28px;
    min-height: 85px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 650px){
      font-size: 20px;
    }
    @media (max-width: 450px){
      line-height: 24px;
    }
  }
  div{
    height: auto;
    width: 250px;
    margin: 0 auto 10px;
    
    img{
      height: 100%;
      width: 100%;
    }
    @media (max-width: 930px){
      width: 200px;
  }
    @media (max-width: 650px){
      width: 160px;
    }
    @media (max-width: 450px){
      width: 150px;
    }
  }
  @media (max-width: 650px){
    padding: 10px 0;
  }
`
const WrapperDetails =styled.div`
  height: auto;
  width: 70%;
  margin: 50px auto 0;
  padding-bottom: 40px;
  &::before{
    display: block;
    content: "";
    height: 3px;
    width: 73%;
    margin: 0 auto 40px;
    background-color: #FE4D84;
  }
  h2{
    transform:scale(1.5);
    color: white;
    font-size: 60px;
    font-weight: 900;
    margin: 0 auto 30px;
    text-align: center;
    font-family: FNumber, Arial;
  }
  h3{
    transform:scaleY(1.1);
    color: white;
    font-size: 20px;
    font-weight: 700;
    width: 80%;
    text-align: center;
    margin: 0 auto;
    line-height: 22px;
    font-family: FInfo, arial;
    @media (max-width: 650px){
      font-size: 17px;
    }
  }
  @media (max-width: 900px){
    width: 100%;
  }
`