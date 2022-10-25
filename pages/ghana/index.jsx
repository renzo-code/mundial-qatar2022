import React from 'react'
import Layout from 'Layout'
import ViewCountry from 'Components/ViewCountry'

const Ghana = () => {
  return(
    <Layout>
      <ViewCountry
        logoFederation="./images/logo-federacion-ghana.png"
        nameCountry="GHANA"
        imgTeam="./images/team-ghana.png"
        description="Luego de no estar en Rusia 2018, las Estrellas Negras regresaron por todo lo alto a una 
                    Copa del Mundo tras liderar el Grupo G de las eliminatorias CAF. Si bien no cuentan con 
                    figuras conocidas, el país ubicado en el oeste de África busca ser un equipo competitivo 
                    con futbolistas que militan en equipos de ligas competitivas en Europa."
        nameDT="OTTO ADDO"
        imgDT="./images/dt-ghana.png"
        egeDT="47 años"
        bjdDT="Ghanés, - en el cargo desde 2022"
        nameStar="JORDAN AYEW"
        imgStar="./images/estrella-ghana.png"
        ageStar="31 años"
        teamStar="Crystal Palace F.C"
        participation="3"
        majorResult="Cuartos de final (Copa mundial de Fútbol 1966 y 2006)"
        dataInfo="Estadística positiva: marcó varios goles en los tres mundiales que disputó. En Alemania 2006 
                  anotó cuatro; en Sudáfrica 2010 cinco y Brasil 2014 cuatro."
        dataInfo2="Estadística negativa: a diferencia de ediciones anteriores, esta vez Ghana no cuenta con 
                  grandes estrellas que puedan ponerse el equipo al hombro. Es la selección clasificada al 
                  Mundial con peor ranking FIFA."
      />
    </Layout>
  )
}

export default Ghana