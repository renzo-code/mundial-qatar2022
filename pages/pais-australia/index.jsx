import React from 'react'
import Layout from 'Layout'
import ViewCountry from 'Components/ViewCountry'

const Australia = () => {
  return(
    <Layout>
      <ViewCountry
        logoFederation="./images/logo-federacion-australia.png"
        nameCountry="AUSTRALIA"
        imgTeam="./images/team-australia.png"
        description="Clasifica a su quinta Copa del Mundo de forma consecutiva (2006, 2010, 2014, 2018 y 2022). 
                    Los socceroos eliminaron a la selección peruana en el repechaje a través de los doce pasos, 
                    con su ‘héroe’ Andrew Redmayne. Compartirá grupo con Francia y Dinamarca, con los que se 
                    enfrentó en Rusia 2018."
        nameDT="GRAHAM ARNOLD"
        imgDT="./images/dt-australia.png"
        egeDT="53 años"
        bjdDT="Australiano, - en el cargo desde 2018"
        nameStar="AJDIN HRUSTIC"
        imgStar="./images/estrella-australia.png"
        ageStar="26 años"
        teamStar="Hellas Verona F.C"
        participation="6"
        majorResult="Octavos de final (Copa mundial de Fútbol 2006)"
        // dataInfo="Dato positivo: las Águilas Verdes acudieron a seis de las últimas ocho justas mundialistas."
        // dataInfo2="Dato negativo: el elenco saudí no logra superar la fase de grupo desde Estados Unidos 1994 
        //           (alcanzaron los octavos de final)."
      />
    </Layout>
  )
}

export default Australia