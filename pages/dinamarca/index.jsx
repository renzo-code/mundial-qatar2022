import React from 'react'
import Layout from 'Layout'
import ViewCountry from 'Components/ViewCountry'

const Dinamarca = () => {
  return(
    <Layout>
      <ViewCountry
        logoFederation="./images/logo-federacion-dinamarca.png"
        nameCountry="DINAMARCA"
        imgTeam="./images/team-dinamarca.png"
        description="Será la sexta participación del país europeo en una Copa del Mundo y la segunda de manera 
                    ininterrumpida. Lo más lejos que pudo llegar fue a los cuartos de final en Francia 1998 y 
                    en la pasada edición quedó invicta pese a caer en octavos frente a Croacia por penales."
        nameDT="KASPER HJULMAND"
        imgDT="./images/dt-dinamarca.png"
        egeDT="50 años"
        bjdDT="Danés, - en el cargo desde 2019"
        nameStar="CHRISTIAN ERIKSEN"
        imgStar="./images/estrella-dinamarca.png"
        ageStar="30 años"
        teamStar="Manchester United F.C"
        participation="5"
        majorResult="Cuartos de final (Copa mundial de Fútbol 1998)"
        dataInfo="Estadística positiva: pasaron la fase de grupos en cuatro oportunidades: México 1986, 
                  Francia 1998, Corea y Japón 2002 y Rusia 2018."
        dataInfo2="Estadística negativa: no superan los octavos de final desde el Mundial de Francia 1998."
      />
    </Layout>
  )
}

export default Dinamarca