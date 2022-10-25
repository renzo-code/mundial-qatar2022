import React from 'react'
import Layout from 'Layout'
import ViewCountry from 'Components/ViewCountry'

const Tunez = () => {
  return(
    <Layout>
      <ViewCountry
        logoFederation="./images/logo-federacion-tunez.png"
        nameCountry="TÚNEZ"
        imgTeam="./images/team-tunez.png"
        description="Las águilas de Cártago van por segunda vez consecutiva a un Mundial. En esta oportunidad 
                    buscarán finalmente romper la mala racha de irse siempre en fase de grupos a pesar de que 
                    en Qatar 2022 jugarán con Francia, Dinamarca y Australia."
        nameDT="JALEL KADRI"
        imgDT="./images/dt-tunez.png"
        egeDT="50 años"
        bjdDT="Tunecino, - en el cargo desde 2022"
        nameStar="WAHBI KHAZRI"
        imgStar="./images/estrella-tunez.png"
        ageStar="31 años"
        teamStar="Montpellier Hérault S.C"
        participation="6"
        majorResult="Primera fase (Copa mundial de Fútbol 1978, 1998, 2002, 2006 y 2018)"
        dataInfo="Estadística positiva: segundo Mundial al que acude de manera consecutiva. Previamente, 
                  estuvo en Rusia 2018."
        dataInfo2="Estadística negativa: nunca pudo superar la fase de grupos. Lo más cerca que estuvo 
                  fue en 1978, cuando venció a México y empató con Alemania."
      />
    </Layout>
  )
}

export default Tunez