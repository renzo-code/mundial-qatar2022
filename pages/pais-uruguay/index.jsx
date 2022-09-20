import React from 'react'
import Layout from 'Layout'
import ViewCountry from 'Components/ViewCountry'

const Uruguay = () => {
  return(
    <Layout>
      <ViewCountry
        logoFederation="./images/logo-federacion-uruguay.png"
        nameCountry="URUGUAY"
        imgTeam="./images/team-uruguay.png"
        description="El primer campeón intentará conseguir su tercera corona en Qatar 2022. En este 
                    siglo su mejor participación fue en Sudáfrica 2010, cuando quedó en el cuarto 
                    lugar tras caer 3-2 ante Alemania en el partido por el tercer puesto. En la 
                    presente Copa del Mundo compartirá el Grupo H con Portugal, Corea del Sur y 
                    Ghana."
        nameDT="DIEGO ALONSO"
        imgDT="./images/dt-uruguay.png"
        egeDT="47 años"
        bjdDT="Uruguayo, - en el cargo desde 2021"
        nameStar="LUIS SUÁREZ"
        imgStar="./images/estrella-uruguay.png"
        ageStar="31 años"
        teamStar="Club Nacional"
        participation="13"
        majorResult="Campeón del mundo (Copa mundial de Fútbol 1930 y 1950)"
        // dataInfo="Estadística positiva: marca muchos goles en fase de grupos. En Alemania 2006 anotó 
        //           cuatro; en Sudáfrica 2010, cinco, y Brasil 2014, cuatro."
        // dataInfo2="Estadística negativa: poca experiencia en mundiales. Estuvieron en Alemania 2006, 
        //           Brasil 2014 y Rusia 2018."
      />
    </Layout>
  )
}

export default Uruguay