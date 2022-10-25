import React from 'react'
import Layout from 'Layout'
import ViewCountry from 'Components/ViewCountry'

const Senegal = () => {
  return (
    <Layout>
      <ViewCountry
        logoFederation="./images/logo-federacion-senegal.png"
        nameCountry="SENEGAL"
        imgTeam="./images/team-senegal.png"
        description="En su primera participación en un Mundial (2002), Senegal maravilló al planeta al llegar 
                    hasta cuartos de final. En la fase de grupos de aquella Copa dejó atrás a históricos como 
                    Francia y Uruguay. Esta vez le tocará enfrentarse nuevamente a un sudamericano. Cissé 
                    quiere repetir la hazaña y Mané, consagrarse aún más. Vienen de ganar la Copa Africana 
                    de Naciones del 2021."
        nameDT="ALIOU CISSÉ"
        imgDT="./images/dt-senegal.png"
        egeDT="46 años"
        bjdDT="Senegalés, - en el cargo desde 2015"
        nameStar="SADIO MANÉ"
        imgStar="./images/estrella-senegal.png"
        ageStar="30 años"
        teamStar="F.C Bayern Munich"
        participation="3"
        majorResult="Cuartos de final (Copa mundial de Fútbol de 2002)"
        dataInfo="Tres participaciones en mundiales, incluyendo a Qatar 2022"
      />
    </Layout>
  )
}

export default Senegal