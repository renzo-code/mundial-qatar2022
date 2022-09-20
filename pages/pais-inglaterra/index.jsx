import React from 'react'
import Layout from 'Layout'
import ViewCountry from 'Components/ViewCountry'

const Inglaterra = () => {
  return(
    <Layout>
      <ViewCountry
        logoFederation="./images/logo-federacion-inglaterra.png"
        nameCountry="INGLATERRA"
        imgTeam="./images/team-inglaterra.png"
        description="Pese a que se les conocen como los inventores del fútbol, los three lions solo pudieron
                    coronarse como campeones del mundo una sola vez en 1966. Desde entonces, no han podido 
                    logrado repetir la hazaña. En Rusia 2018, se quedaron por poco, pues cayeron eliminados 
                    ante Croacia en semifinales. De la mano de Gareth Southgate, Harry Kane y Jack Grealish 
                    esperan romper ese ‘maleficio’."
        nameDT="GARETH SOUTHGATE"
        imgDT="./images/dt-inglaterra.png"
        egeDT="52 años"
        bjdDT="Inglés, - en el cargo desde 2016"
        nameStar="HARRY KANE"
        imgStar="./images/estrella-inglaterra.png"
        ageStar="29 años"
        teamStar="Tottenham Hotspur"
        participation="16"
        majorResult="Campeón del mundo (Copa mundial de Fútbol de 1966)"
        dataInfo="Estadística positiva: su última participación fue prometedora, ya que en Rusia 2018 
                  llegó hasta las semifinales, instancia que no superaba desde 1966."
        dataInfo2="Estadística negativa: su peor participación fue en Brasil 2104, competencia en la que 
                  quedaron eliminados en la fase de grupos con apenas un punto en la última fecha ante 
                  Costa Rica."
      />
    </Layout>
  )
}

export default Inglaterra