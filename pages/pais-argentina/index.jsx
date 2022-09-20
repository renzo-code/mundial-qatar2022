import React from 'react'
import Layout from 'Layout'
import ViewCountry from 'Components/ViewCountry'

const Argentina = () => {
  return(
    <Layout>
      <ViewCountry
        logoFederation="./images/logo-federacion-argentina.png"
        nameCountry="ARGENTINA"
        imgTeam="./images/team-argentina.png"
        description="En la que podría ser la última opción de Lionel Messi para levantar la Copa del Mundo, 
                    Argentina se perfila como una de las favoritas en Qatar 2022. Luego de consagrarse en 
                    la Copa América 2021 ante Brasil y vencer a Italia en la Finalissima, la Albiceleste 
                    espera cerrar el año con un trofeo que en los últimos tiempos le fue esquivo."
        nameDT="LIONEL SCALONI"
        imgDT="./images/dt-argentina.png"
        egeDT="44 años"
        bjdDT="Argentino, - en el cargo desde 2018"
        nameStar="LIONEL MESSI"
        imgStar="./images/estrella-argentina.png"
        ageStar="35 años"
        teamStar="Paris Saint-Germain F.C"
        participation="17"
        majorResult="Campeones del mundo (Copa mundial de Fútbol de 1978, 1986)"
        dataInfo="Dato positivo: Argentina tiene una racha vigente de 33 partidos consecutivos sin conocer 
                  la derrota."
        dataInfo2="Dato negativo: el conjunto sudamericano no logra ganar un Mundial desde hace 36 años 
                  (México 1986)."
      />
    </Layout>
  )
}

export default Argentina