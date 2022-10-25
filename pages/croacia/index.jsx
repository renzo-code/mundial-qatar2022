import React from 'react'
import Layout from 'Layout'
import ViewCountry from 'Components/ViewCountry'

const Croacia = () => {
  return(
    <Layout>
      <ViewCountry
        logoFederation="./images/logo-federacion-croacia.png"
        nameCountry="CROACIA"
        imgTeam="./images/team-croacia.png"
        description="El último subcampeón del mundo buscará repetir su actuación de Qatar 2022, aunque con 
                    algunas nuevas caras, pues la selección de Croacia presenta un recambio generacional 
                    bastante marcado con respecto a la selección que dio la sorpresa en Rusia 2018, como por 
                    ejemplo los retiros de Ivan Rakitic y Mario Mandzukic."
        nameDT="ZLATKO DALIC"
        imgDT="./images/dt-croacia.png"
        egeDT="55 años"
        bjdDT="Bosnio, - en el cargo desde 2017"
        nameStar="LUKA MODRIC"
        imgStar="./images/estrella-croacia.png"
        ageStar="37 años"
        teamStar="Real Madrid C.F"
        participation="6"
        majorResult="Subcampeón (Copa mundial de Fútbol de 2018)"
        dataInfo="Estadística positiva: su mejor participación fue en el último Mundial Rusia 2018 en donde quedaron subcampeones tras 
                  erder ante Francia."
        dataInfo2="Estadística negativa: ha disputado 5 mundiales, y salvo sus grandes participaciones de 1998 
                  y 2018, en el resto fue eliminado en primera ronda."
      />
    </Layout>
  )
}

export default Croacia