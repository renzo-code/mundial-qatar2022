import React from 'react'
import Layout from 'Layout'
import ViewCountry from 'Components/ViewCountry'

const CoreaDelSur = () => {
  return(
    <Layout>
      <ViewCountry
        logoFederation="./images/logo-federacion-corea.png"
        nameCountry="COREA DEL SUR"
        imgTeam="./images/team-corea.png"
        description="La selección de Corea del Sur es el combinado asiático con mayor presencia en 
                    los mundiales. Los guerreros de Taeguk disputarán su décima Copa del Mundo de 
                    manera consecutiva, número que solo lo tienen Brasil, Alemania, Argentina y 
                    España."
        nameDT="PAULO BENTO"
        imgDT="./images/dt-corea.png"
        egeDT="53 años"
        bjdDT="Portugués, - en el cargo desde 2018"
        nameStar="SON HEUNG-MIN" 
        imgStar="./images/estrella-corea.png"
        ageStar="30 años"
        teamStar="Tottenham Hotspur"
        participation="10"
        majorResult="Semifinales (Copa mundial de Fútbol de 2002)"
        dataInfo="Estadística positiva: 10 participaciones en mundiales (Qatar 2022 será la 11). "
        dataInfo2="Estadística negativa: su peor ubicación en mundiales fue en Francia 1998 (puesto 30)."
      />
    </Layout>
  )
}

export default CoreaDelSur