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
        description="Luego de no estar en Rusia 2018, las águilas negras regresaron por todo lo alto 
                    a una Copa del Mundo tras liderar el Grupo G de las eliminatorias CAF. Si bien no 
                    cuentan con sus figuras conocidas, el país ubicado en el oeste de África busca 
                    reforzarse con cracks que militan en equipos de ligas competitivas."
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
        dataInfo="Estadística positiva: marca muchos goles en fase de grupos. En Alemania 2006 anotó 
                  cuatro; en Sudáfrica 2010, cinco, y Brasil 2014, cuatro."
        dataInfo2="Estadística negativa: poca experiencia en mundiales. Estuvieron en Alemania 2006, 
                  Brasil 2014 y Rusia 2018."
      />
    </Layout>
  )
}

export default Ghana