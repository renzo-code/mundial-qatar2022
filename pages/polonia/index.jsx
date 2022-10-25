import React from 'react'
import Layout from 'Layout'
import ViewCountry from 'Components/ViewCountry'

const Polonia = () => {
  return(
    <Layout>
      <ViewCountry
        logoFederation="./images/logo-federacion-polonia.png"
        nameCountry="POLONIA"
        imgTeam="./images/team-polonia.png"
        description="De la mano de su gran figuraelegido como mejor jugador del mundo por la FIFA en 2021, 
                    Robert Lewandowski, la selección de Polonia dejó afuera a la complicada Suecia y clasificó 
                    a Qatar, donde intentará sumar más de tres puntos y superar la fase de grupos."
        nameDT="CZESLAW MINCHNIEWICZ"
        imgDT="./images/dt-polonia.png"
        egeDT="52 años"
        bjdDT="Polaco, - en el cargo desde 2022"
        nameStar="ROBERT LEWANDOWSKI"
        imgStar="./images/estrella-polonia.png"
        ageStar="34 años"
        teamStar="F.C Barcelona"
        participation="9"
        majorResult="Semifinales (Copa mundial de Fútbol de 1974, 1982)"
        dataInfo="Estadística positiva:  logró ubicarse en el tercer lugar en dos ocasiones: Alemania 74 y España 82."
        dataInfo2="Estadística negativa: no disputa los octavos de final desde México 86."
      />
    </Layout>
  )
}

export default Polonia