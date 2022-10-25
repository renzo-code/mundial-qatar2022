import React from 'react'
import Layout from 'Layout'
import ViewCountry from 'Components/ViewCountry'

const Iran = () => {
  return(
    <Layout>
      <ViewCountry
        logoFederation="./images/logo-federacion-iran.png"
        nameCountry="IRÁN"
        imgTeam="./images/team-iran.png"
        description="En los últimos años, Irán se consolidó como una potencia en el fútbol asiático, pues ha 
                    ganado varios títulos en su continente y consiguió su clasificación a su tercera Copa del 
                    Mundo consecutiva. Ahora esperan avanzar en la fase de grupos por primera vez en su historia."
        nameDT="DRAGAN SKOCIC"
        imgDT="./images/dt-iran.png"
        egeDT="52 años"
        bjdDT="Croata, - en el cargo desde 2020"
        nameStar="MEHDI TAREMI"
        imgStar="./images/estrella-iran.png"
        ageStar="30 años"
        teamStar="F.C Porto"
        participation="6"
        majorResult="Primera fase (Copa mundial de Fútbol de 1978, 1998, 2006, 2014 y 2018)."
        dataInfo="Estadística positiva: terminó entre los dos primeros del Grupo A de las Eliminatorias 
                  Asiáticas y clasificó a su tercer Mundial de manera consecutivo (Brasil 2014, Rusia 2018 
                  y Qatar 2022)."
        dataInfo2="Estadística negativa: solo en el mundial anterior (Rusia 2018) pudo hacer más de tres puntos."
      />
    </Layout>
  )
}

export default Iran