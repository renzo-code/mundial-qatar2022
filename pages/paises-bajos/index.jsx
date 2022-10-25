import React from 'react'
import Layout from 'Layout'
import ViewCountry from 'Components/ViewCountry'

const PaisesBajos = () => {
  return (
    //FALTA INFORMACION
    <Layout>
      <ViewCountry
        logoFederation="./images/logo-federacion-paises-bajos.png"
        nameCountry="PAÍSES BAJOS"
        imgTeam="./images/team-paises-bajos.png"
        description="Nunca han sido campeones del mundo, pero esperan revertir esa mala racha en Qatar 2022. 
                    Más conocida como Holanda, la Naranja Mecánica buscará brillar de la mano del histórico 
                    Louis van Gaal como entrenador y sus grandes figuras como Memphis Depay."
        nameDT="LOUIS VAN GAAL"
        imgDT="./images/dt-paises-bajos.png"
        egeDT="71 años"
        bjdDT="Holandés, - en el cargo desde 2021"
        nameStar="MEMPHIS DEPAY"
        imgStar="./images/estrella-paises-bajos.png"
        ageStar="28 años"
        teamStar="F.C Barcelona"
        participation="10"
        majorResult="Subcampeón (Copa mundial de Fútbol de 1974, 1978 y 2010)."
        dataInfo="Estadística positiva: en su última participación en un Mundial, que fue en Brasil 2014, 
                  logró llegar al tercer lugar."
        dataInfo2="Estadística negativa: de las tres finales del Mundo que disputó, perdió todas."
      />
    </Layout>
  )
}

export default PaisesBajos