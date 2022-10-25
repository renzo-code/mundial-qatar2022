import Head from 'next/head'
import Layout from 'Layout'
import styled from 'styled-components'
import BlockGroup from 'Components/BlockGroups'
import CarouselNotices from 'Components/CarouselPortada/default'

const Home = () => {
  return (
    <>
      <Layout>
        {/* <TitleHome>MUNDIAL QATAR 2022 SIGUE AQUÍ TODOS LOS DETALLES Y FIXTURES QUE DEJÓ EL SORTEO</TitleHome> */}
        <WrapperImgTitle>
          <ImageTitle src="./images/Logo_title.png" />
        </WrapperImgTitle>
        <Container>
          <BlockGroup 
            title="GRUPO A" 
            n={0} 
            redirect="/grupo-a/"
            // redirect="https://especiales.larepublica.pe/mundial-qatar-2022-clasificados-grupos-fixture-tabla-de-posiciones-horarios-partidos-copa-del-mundo-fifa-dpts/grupo-a/"
          />
          <BlockGroup 
            title="GRUPO B" 
            n={1} 
            redirect="/grupo-b/"
            // redirect="https://especiales.larepublica.pe/mundial-qatar-2022-clasificados-grupos-fixture-tabla-de-posiciones-horarios-partidos-copa-del-mundo-fifa-dpts/grupo-b/"
          />
          <BlockGroup 
            title="GRUPO C" 
            n={2} 
            redirect="/grupo-c/"
            // redirect="https://especiales.larepublica.pe/mundial-qatar-2022-clasificados-grupos-fixture-tabla-de-posiciones-horarios-partidos-copa-del-mundo-fifa-dpts/grupo-c/"
          />
          <BlockGroup 
            title="GRUPO D" 
            n={3} 
            redirect="/grupo-d/"
            // redirect="https://especiales.larepublica.pe/mundial-qatar-2022-clasificados-grupos-fixture-tabla-de-posiciones-horarios-partidos-copa-del-mundo-fifa-dpts/grupo-d/"
          />
          <BlockGroup 
            title="GRUPO E" 
            n={4} 
            redirect="/grupo-e/"
            // redirect="https://especiales.larepublica.pe/mundial-qatar-2022-clasificados-grupos-fixture-tabla-de-posiciones-horarios-partidos-copa-del-mundo-fifa-dpts/grupo-e/"
          />
          <BlockGroup 
            title="GRUPO F" 
            n={5} 
            redirect="/grupo-f/"
            // redirect="https://especiales.larepublica.pe/mundial-qatar-2022-clasificados-grupos-fixture-tabla-de-posiciones-horarios-partidos-copa-del-mundo-fifa-dpts/grupo-f/"
          />
          <BlockGroup 
            title="GRUPO G" 
            n={6} 
            redirect="/grupo-g/"
            // redirect="https://especiales.larepublica.pe/mundial-qatar-2022-clasificados-grupos-fixture-tabla-de-posiciones-horarios-partidos-copa-del-mundo-fifa-dpts/grupo-g/"
          />
          <BlockGroup 
            title="GRUPO H" 
            n={7} 
            redirect="/grupo-h/"
            // redirect="https://especiales.larepublica.pe/mundial-qatar-2022-clasificados-grupos-fixture-tabla-de-posiciones-horarios-partidos-copa-del-mundo-fifa-dpts/grupo-h/"
          />
        </Container>
        {/* <CarouselNotices/> */}
      </Layout>
    </>
  )
}

export default Home

const Container = styled.div`
  /* background-color: purple; */
  margin-bottom: 70px;
  height: 100%;
  width: 100%;
`
const WrapperImgTitle = styled.div`
  height: auto;
  width: 250px;
  margin: 0 auto;
  padding-top: 30px;

  @media (max-width: 550px){
    width: 200px;
    padding-top: 30px;
  }
`
const ImageTitle = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`
const TitleHome = styled.h1`
  font-size: 33px;
  margin: 10px auto;
  text-align: center;
  letter-spacing: -1.5px;
  line-height: 37px;
  color: #871537;
  font-weight: 900;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`