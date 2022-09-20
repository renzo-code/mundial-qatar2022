import React from 'react'
import Layout from 'Layout'
import ViewCountry from 'Components/ViewCountry'

const Qatar = () => {
  return (
    <Layout>
      <ViewCountry
        logoFederation="./images/logo-federacion-qatar.png"
        nameCountry="QATAR"
        imgTeam="./images/team-qatar.png"
        description="El anfitrión del Mundial es además debutante en el certamen y 
                    quiere demostrar al mundo que son más que poder económico. De la 
                    mano de Félix Sánchez, que lleva cinco años en el cargo y ha pasado 
                    por las selecciones juveniles del mismo país, busca dejar la mejor 
                    impresión para hacer prevalecer su título campeón de la Copa Asiática, 
                    la cual ganó por primera vez en el 2019."
        nameDT="FÉLIX SÁNCHEZ"
        imgDT="./images/dt-qatar.png"
        egeDT="46 años"
        bjdDT="español, - en el cargo desde 2017"
        nameStar="AKRAM AFIF"
        imgStar="./images/estrella-qatar.png"
        ageStar="25 años"
        teamStar="Al Sadd de Qatar"
        participation="0"
        dataInfo="51 es el puesto que ocupa en el último ranking FIFA"
      />
    </Layout>
  )
}

export default Qatar