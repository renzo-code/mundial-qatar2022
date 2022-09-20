import React from 'react'
import Layout from 'Layout'
import ViewCountry from 'Components/ViewCountry'

const Ecuador = () => {
  return(
    <Layout>
      <ViewCountry
        logoFederation="./images/logo-federacion-ecuador.png"
        nameCountry="ECUADOR"
        imgTeam="./images/team-ecuador.png"
        description="El ‘Tri’ llega con la firme convicción de dejar huella. Tras dos 
                    mundiales de ausencia, y aunque su historial en este certamen es 
                    corto, la escuadra sudamericana quiere superar lo hecho en el 2006, 
                    que alcanzó los octavos de final."
        nameDT="GUSTAVO ALFARO"
        imgDT="./images/dt-ecuador.png"
        egeDT="60 años"
        bjdDT="Argentino, - en el cargo desde 2015"
        nameStar="ENNER VALENCIA"
        imgStar="./images/estrella-ecuador.png"
        ageStar="32 años"
        teamStar="Fenerbahçe S. K. de Turquía"
        participation="4"
        majorResult="Octavos de final (Copa mundial de Fútbol de 2006)"
        dataInfo="35 goles tiene Enner Valencia, su goleador histórico aún en actividad"
      />
    </Layout>
  )
}

export default Ecuador