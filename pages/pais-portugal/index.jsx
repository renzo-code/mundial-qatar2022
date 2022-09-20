import React from 'react'
import Layout from 'Layout'
import ViewCountry from 'Components/ViewCountry'

const Portugal = () => {
  return(
    <Layout>
      <ViewCountry
        logoFederation="./images/logo-federacion-portugal.png"
        nameCountry="PORTUGAL"
        imgTeam="./images/team-portugal.png"
        description="Probablemente, sea el último Mundial de CR7. La selección de Portugal va en 
                    busca del título mundial con una gran generación, que mezcla jugadores jóvenes 
                    y experimentados. En el sorteo cayó en el Grupo H y se medirá ante Uruguay, 
                    Ghana y Corea del Sur. "
        nameDT="FERNANDO SANTOS"
        imgDT="./images/dt-portugal.png"
        egeDT="67 años"
        bjdDT="Portugués, - en el cargo desde 2014"
        nameStar="CRISTIANO RONALDO"
        imgStar="./images/estrella-portugal.png"
        ageStar="30 años"
        teamStar="Manchester United F.C"
        participation="8"
        majorResult="Cuartos de final (Copa mundial de Fútbol 1966 y 2006)"
        // dataInfo="Estadística positiva: esta es la quinta participación consecutiva de Suiza en las 
        //           Copas del Mundo. "
        // dataInfo2="Estadística negativa: los suizos no logran acceder a los cuartos de final del 
        //           mundial desde 1954 (en aquella edición fueron anfitriones)."
      />
    </Layout>
  )
}

export default Portugal