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
        nameStar="KEYLOR NAVAS"
        imgStar="./images/estrella-costa-rica.png"
        ageStar="35 años"
        teamStar="Paris Saint-Germain F.C"
        participation="6"
        majorResult="Cuartos de Final (Copa mundial de Fútbol 2014)"
        dataInfo="Estadística positiva: Seis participaciones en los mundiales, su mejor resultado fue llegar a 
                  cuartos de final en Brasil 2014."
        dataInfo2="Estadística negativa: En Alemania 2006 no hizo puntos y se ubicó en el penúltimo lugar de 
                  la tabla general. "
      />
    </Layout>
  )
}

export default CostaRica