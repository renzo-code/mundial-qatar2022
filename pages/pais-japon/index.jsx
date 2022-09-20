import React from 'react'
import Layout from 'Layout'
import ViewCountry from 'Components/ViewCountry'

const Japon = () => {
  return(
    <Layout>
      <ViewCountry
        logoFederation="./images/logo-federacion-japon.png"
        nameCountry="JAPÓN"
        imgTeam="./images/team-japon.png"
        description="La selección de Japón es una de los más fuertes en Asia. No por gusto es el 
                    máximo ganador de la Copa Asiática con cuatro trofeos. Desde Francia 1998 no ha 
                    faltado a una sola cita mundialista. En Qatar 2022 intentará superar la barrera 
                    de los octavos de final."
        nameDT="HAJIME MORIYASU"
        imgDT="./images/dt-japon.png"
        egeDT="54 años"
        bjdDT="Japonés, - en el cargo desde 2018"
        nameStar="TAKUMI MINAMINO"
        imgStar="./images/estrella-japon.png"
        ageStar="27 años"
        teamStar="A.S Monaco"
        participation="7"
        majorResult="Octavos de final (Copa mundial de Fútbol 2002, 2010 y 2018)"
        // dataInfo="Estadística positiva:  20 participaciones en mundiales, incluyendo Qatar 2022. Conquistó 
        //           cuatro Copas del Mundo (1954, 1974, 1990 y 2014)."
        dataInfo2="Estadística negativa: su peor ubicación en mundiales (puesto 31) la obtuvo en
                  Francia 1998."
      />
    </Layout>
  )
}

export default Japon