import React from 'react'
import Layout from 'Layout'
import ViewCountry from 'Components/ViewCountry'

const Marruecos = () => {
  return(
    <Layout>
      <ViewCountry
        logoFederation="./images/logo-federacion-marruecos.png"
        nameCountry="MARRUECOS"
        imgTeam="./images/team-marruecos.png"
        description="Tras tener un paso arrollador en las Eliminatorias Africanas, en la cual ganó sus seis 
                    partidos de fase de grupos y derrotó con un global de 5-2 a República Democrática del 
                    Congo en el repechaje, la selección de Marruecos clasificó a su segundo Mundial de manera 
                    consecutiva."
        nameDT="WALID REGRAGUI"
        imgDT="./images/dt-marruecos.png"
        egeDT="47 años"
        bjdDT="Marroquí, - en el cargo desde 2022"
        nameStar="ACHRAF HAKIMI"
        imgStar="./images/estrella-marruecos.png"
        ageStar="23 años"
        teamStar="Paris Saint Germain F.C"
        participation="6"
        majorResult="Octavos de Final (Copa mundial de Fútbol 1986)"
        dataInfo="Estadística positiva:  su mejor actuación fue en México 86, en el cual terminaron ubicados 
                  en la undécima posición."
        dataInfo2="Estadística negativa: no tienen mucha experiencia en mundiales, pues solo jugaron 5 ediciones."
      />
    </Layout>
  )
}

export default Marruecos