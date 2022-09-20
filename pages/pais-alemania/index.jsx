import React from 'react'
import Layout from 'Layout'
import ViewCountry from 'Components/ViewCountry'

const Alemania = () => {
  return(
    <Layout>
      <ViewCountry
        logoFederation="./images/logo-federacion-alemania.png"
        nameCountry="ALEMANIA"
        imgTeam="./images/team-alemania.png"
        description="La selección de Alemania siempre es candidata fija a ganar la Copa del Mundo. Los 
                    teutones son el combinado nacional con más finales disputadas, ocho en total, e incluso 
                    supera a Brasil con siete. Thomas Muller, con 10 tantos, buscará superar a su compatriota 
                    Miroslav Klose (16) como el máximo goleador de los mundiales. "
        nameDT="HANSI FLICK"
        imgDT="./images/dt-alemania.png"
        egeDT="57 años"
        bjdDT="Alemán, - en el cargo desde 2021"
        nameStar="JOSHUA KIMMICH"
        imgStar="./images/estrella-alemania.png"
        ageStar="27 años"
        teamStar="F.C Bayern Múnich"
        participation="19"
        majorResult="Campeones del mundo (Copa mundial de Fútbol 1954, 1970, 1990 y 2014)"
        dataInfo="Estadística positiva:  20 participaciones en mundiales, incluyendo Qatar 2022. Conquistó 
                  cuatro Copas del Mundo (1954, 1974, 1990 y 2014)."
        dataInfo2="Estadística negativa: su peor ubicación fue el puesto 22 en Rusia 2018."
      />
    </Layout>
  )
}

export default Alemania