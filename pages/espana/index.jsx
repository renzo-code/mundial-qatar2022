import React from 'react'
import Layout from 'Layout'
import ViewCountry from 'Components/ViewCountry'

const Espana = () => {
  return(
    <Layout>
      <ViewCountry
        logoFederation="./images/logo-federacion-espana.png"
        nameCountry="ESPAÑA"
        imgTeam="./images/team-espana.png"
        description="La campeona del mundo en Sudáfrica 2010 buscará su segundo título mundial en Qatar 2022. 
                    Es el octavo y el último país distinto en ganar la Copa del Mundo tras Uruguay, Italia, 
                    Alemania, Brasil, Inglaterra, Argentina y Francia. En el país asiático compartirá el Grupo 
                    E con el cuadro alemán, Japón y Costa Rica."
        nameDT="LUIS ENRIQUE MARTÍNEZ"
        imgDT="./images/dt-espana.png"
        egeDT="52 años"
        bjdDT="Español, - en el cargo desde 2019"
        nameStar="PEDRI GONZÁLEZ"
        imgStar="./images/estrella-espana.png"
        ageStar="19 años"
        teamStar="F.C Barcelona"
        participation="6"
        majorResult="Campeones del mundo (Copa mundial de Fútbol 2010)"
        dataInfo="Estadística positiva: 15 participaciones en mundiales. Su mejor resultado fue ser campeón 
                  en Sudáfrica 2010."
        dataInfo2="Estadística negativa: Sus dos últimas participaciones fueron decepcionantes. Eliminados en 
                  fase de grupos en 2014 y en octavos de final en 2018."
      />
    </Layout>
  )
}

export default Espana