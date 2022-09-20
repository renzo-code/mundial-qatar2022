import React from 'react'
import Layout from 'Layout'
import ViewCountry from 'Components/ViewCountry'

const Belgica = () => {
  return(
    <Layout>
      <ViewCountry
        logoFederation="./images/logo-federacion-belgica.png"
        nameCountry="BÉLGICA"
        imgTeam="./images/team-belgica.png"
        description="Será la participación número 14 de los diablos rojos en una Copa del Mundo. 
                    Esta escuadra buscará mejorar lo hecho en el Mundial de Rusia 2018, en el que 
                    llegó hasta las semifinales y eliminó a Brasil. Con una base de jugadores que 
                    se mantiene, los belgas son llamados a ser uno de los protagonistas de este 
                    certamen. "
        nameDT="ROBERTO MARTÍNEZ"
        imgDT="./images/dt-belgica.png"
        egeDT="49 años"
        bjdDT="Español, - en el cargo desde 2016"
        nameStar="KEVIN DE BRUYNE"
        imgStar="./images/estrella-belgica.png"
        ageStar="31 años"
        teamStar="Manchester City F.C"
        participation="13"
        majorResult="Semifinales (Copa mundial de Fútbol 2018)"
        // dataInfo="Estadística positiva:  20 participaciones en mundiales, incluyendo Qatar 2022. Conquistó 
        //           cuatro Copas del Mundo (1954, 1974, 1990 y 2014)."
        dataInfo2="Mal presente de algunas de sus figuras como Eden Hazard y Romelu Lukaku."
      />
    </Layout>
  )
}

export default Belgica