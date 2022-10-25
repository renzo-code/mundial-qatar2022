import React from 'react'
import Layout from 'Layout'
import ViewCountry from 'Components/ViewCountry'

const Canada = () => {
  return(
    <Layout>
      <ViewCountry
        logoFederation="./images/logo-federacion-canada.png"
        nameCountry="CANADÁ"
        imgTeam="./images/team-canada.png"
        description="Los rojos participarán en su tercera Copa del Mundo luego de realizar una gran 
                    campaña en las eliminatorias de la Concacaf. El equipo dirigido por John Herdman 
                    vive uno de sus mejores momentos futbolísticos a lo largo de su historia y tiene 
                    algunos jugadores que resaltan en las principales ligas de Europa."
        nameDT="JOHN HERDMAN"
        imgDT="./images/dt-canada.png"
        egeDT="47 años"
        bjdDT="Inglés, - en el cargo desde 2018"
        nameStar="ALPHONSO DAVIES"
        imgStar="./images/estrella-canada.png"
        ageStar="21 años"
        teamStar="F.C Bayern Munich"
        participation="2"
        majorResult="Fase de Grupos (Copa mundial de Fútbol 1986)"
        dataInfo="Estadística positiva: Solo perdió dos partidos de 20 a lo largo de las 
                  Eliminatorias Concacaf "
        dataInfo2="Estadística negativa: No pasó la primera ronda en la única Copa del Mundo en la que participó 
                  (México 1986)."
      />
    </Layout>
  )
}

export default Canada