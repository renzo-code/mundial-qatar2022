import React from 'react'
import Layout from 'Layout'
import ViewCountry from 'Components/ViewCountry'

const Francia = () => {
  return(
    <Layout>
      <ViewCountry
        logoFederation="./images/logo-federacion-francia.png"
        nameCountry="FRANCIA"
        imgTeam="./images/team-francia.png"
        description="El reciente campeón mundial (Rusia 2018) busca aprovechar su brillante generación para 
                    volver a coronarse. Sin embargo, primero tendrá que romper la racha negativa que tiene 
                    todo flamante campeón en los últimos tiempos (no pasar la fase de grupos). El Gallito 
                    se medirá ante las mismas selecciones que en la cita mundialista pasada (Dinamarca y 
                    Australia), a excepción de Túnez."
        nameDT="DIDIER DESCHAMPS"
        imgDT="./images/dt-francia.png"
        egeDT="53 años"
        bjdDT="Francés, - en el cargo desde 2012"
        nameStar="KARIM BENZEMA"
        imgStar="./images/estrella-francia.png"
        ageStar="34 años"
        teamStar="Real Madrid C.F"
        participation="16"
        majorResult="Campeones del mundo (Copa mundial de Fútbol de 1998, 2018)"
        dataInfo="16 participaciones tiene el país, incluyendo Qatar 2022. Francia irá en busca de su tercera 
                Copa del Mundo, luego de ganar la de 1998 y 2018."
      />
    </Layout>
  )
}

export default Francia