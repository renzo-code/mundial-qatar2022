import React from 'react'
import Layout from 'Layout'
import ViewCountry from 'Components/ViewCountry'

const Usa = () => {
  return(
    <Layout>
      <ViewCountry
        logoFederation="./images/logo-federacion-eeuu.png"
        nameCountry="ESTADOS UNIDOS"
        imgTeam="./images/team-eeuu.png"
        description="Luego de estar ausente en la edición anterior, el vigente campeón de la Concacaf vuelve 
                    con la ilusión de demostrar su progresiva mejora en los últimos años. Con varios jugadores 
                    destacados en el fútbol europeo, el próximo anfitrión de la Copa del Mundo es uno de los 
                    favoritos de su grupo para pasar a la siguiente fase."
        nameDT="DREGG BERHALTER"
        imgDT="./images/dt-eeuu.png"
        egeDT="49 años"
        bjdDT="Estadounidense, - en el cargo desde 2018"
        nameStar="CHRISTIAN PULISIC"
        imgStar="./images/estrella-eeuu.png"
        ageStar="23 años"
        teamStar="Chelsea F.C"
        participation="11"
        majorResult="Semifinales (Copa mundial de Fútbol de 1930)"
        dataInfo="Estadística positiva: después de México, es la selección de su confederación que ha 
                  clasificado a más Mundiales (11)."
        dataInfo2="Estadística negativa: el balance general de sus participaciones es negativo, con 19 
                  derrotas, seis empates y solo ocho victorias."
      />
    </Layout>
  )
}

export default Usa