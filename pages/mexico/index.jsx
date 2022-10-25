import React from 'react'
import Layout from 'Layout'
import ViewCountry from 'Components/ViewCountry'

const Mexico = () => {
  return(
    //FALTA INFORMACIÓN
    <Layout>
      <ViewCountry
        logoFederation="./images/logo-federacion-mexico.png"
        nameCountry="MÉXICO"
        imgTeam="./images/team-mexico.png"
        description="Pese a que sufrieron más de la cuenta para clasificar, México logró sacar los boletos para 
                    participar en su octavo Mundial de manera consecutiva. En Qatar, los aztecas buscarán vencer 
                    los fantasmas del pasado y finalmente superar la fase de octavos de final para alcanzar el 
                    ansiado quinto partido."
        nameDT="GERARDO MARTINO"
        imgDT="./images/dt-mexico.png"
        egeDT="59 años"
        bjdDT="Argentino, - en el cargo desde 2019"
        nameStar="HIRVING LOZANO"
        imgStar="./images/estrella-mexico.png"
        ageStar="27 años"
        teamStar="CALCIO NAPOLI"
        participation="15"
        majorResult="Cuartos de Final (Copa mundial de Fútbol de 1970, 1986)"
        dataInfo="Estadística positiva: su mejor actuación fue en México 86 y 70, donde acabó en sexto lugar."
        dataInfo2="Estadística negativa: la última vez que llegaron al quinto partido fue en México 86, 
                  desde entonces, acumulan siete mundiales sin pasar a los cuartos de final."
      />
    </Layout>
  )
}

export default Mexico