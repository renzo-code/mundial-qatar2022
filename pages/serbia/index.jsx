import React from 'react'
import Layout from 'Layout'
import ViewCountry from 'Components/ViewCountry'

const Serbia = () => {
  return(
    <Layout>
      <ViewCountry
        logoFederation="./images/logo-federacion-serbia.png"
        nameCountry="SERBIA"
        imgTeam="./images/team-serbia.png"
        description="El representativo balcánico clasificó a este Mundial sin la necesidad de jugar el 
                    repechaje europeo, gracias a su victoria sobre Portugal en la jornada final. En su 
                    tercera presencia en el certamen con su actual denominación, buscará revancha en su 
                    debut contra Brasil, rival que lo eliminó hace cuatro años al vencerlo 2-0 en la jornada 
                    final."
        nameDT="DRAGAN STOJKOVIC"
        imgDT="./images/dt-serbia.png"
        egeDT="57 años"
        bjdDT="Serbio, - en el cargo desde 2021"
        nameStar="DUSAN VLAHOVIC"
        imgStar="./images/estrella-serbia.png"
        ageStar="22 años"
        teamStar="Juventus F.C"
        participation="15"
        majorResult="Cuartos de final (Copa mundial de Fútbol 1930 y 1962)"
        dataInfo="Estadística positiva: ha logrado el cuarto lugar en dos oportunidades: Uruguay 
                  1930 y Chile 1962 (ambas como Yugoslavia)."
        dataInfo2="Estadística negativa: no ha podido superar la fase de grupos en sus dos mundiales 
                  jugados como Serbia: Sudáfrica 2010 y Rusia 2018."
      />
    </Layout>
  )
}

export default Serbia