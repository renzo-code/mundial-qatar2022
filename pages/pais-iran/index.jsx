import React from 'react'
import Layout from 'Layout'
import ViewCountry from 'Components/ViewCountry'

const Iran = () => {
  return(
    <Layout>
      <ViewCountry
        logoFederation="./images/logo-federacion-iran.png"
        nameCountry="IRÁN"
        imgTeam="./images/team-iran.png"
        description="Luego de estar ausente en la edición anterior, el vigente campeón de la Concacaf vuelve 
                    con la ilusión de demostrar su progresiva mejora en los últimos años. Con varios jugadores 
                    destacados en el fútbol europeo, el próximo anfitrión de la Copa del Mundo es uno de los 
                    favoritos de su grupo para pasar a la siguiente fase."
        nameDT="DRAGAN SKOCIC"
        imgDT="./images/dt-iran.png"
        egeDT="52 años"
        bjdDT="Croata, - en el cargo desde 2020"
        nameStar="MEHDI TAREMI"
        imgStar="./images/estrella-iran.png"
        ageStar="30 años"
        teamStar="F.C Porto"
        participation="6"
        majorResult="Primera fase (Copa mundial de Fútbol de 1978, 1998, 2006, 2014 y 2018)"
        dataInfo="Estadística positiva: terminó entre los dos primeros del Grupo A de las Eliminatorias 
                  Asiáticas y clasificó a su tercer Mundial de manera consecutivo (Brasil 2014, Rusia 2018 
                  y Qatar 2022)."
        dataInfo2="Estadística negativa: su última gran actuación data del Mundial 1978, en el que terminaron 
                  en la posición 14."
      />
    </Layout>
  )
}

export default Iran