import React from 'react'
import Layout from 'Layout'
import ViewCountry from 'Components/ViewCountry'

const CostaRica = () => {
  return(
    <Layout>
      <ViewCountry
        logoFederation="./images/logo-federacion-costa-rica.png"
        nameCountry="COSTA RICA"
        imgTeam="./images/team-costa-rica.png"
        description="El cuadro centroamericano es una de las selecciones más destacadas de su región. Fue el 
                    último equipo clasificado a Qatar 2022 tras vencer en el repechaje a Nueva Zelanda. En 
                    el presente Mundial compartirá el Grupo E con España, Alemania y Japón."
        nameDT="LUIS FERNANDO SUÁREZ"
        imgDT="./images/dt-costa-rica.png"
        egeDT="62 años"
        bjdDT="Colombiano, - en el cargo desde 2021"
        nameStar="JOEL CAMPBELL"
        imgStar="./images/estrella-costa-rica.png"
        ageStar="30 años"
        teamStar="Club León"
        participation="6"
        majorResult="Cuartos de Final (Copa mundial de Fútbol 2014)"
        // dataInfo="Estadística positiva: 15 participaciones en mundiales. Su mejor resultado fue ser campeón 
        //           en Sudáfrica 2010."
        // dataInfo2="Estadística negativa: nunca pudo superar la fase de grupos y en 2018 no logró conseguir 
        //           victorias."
      />
    </Layout>
  )
}

export default CostaRica