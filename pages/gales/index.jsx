import React from 'react'
import Layout from 'Layout'
import ViewCountry from 'Components/ViewCountry'

const Gales = () => {
  return (
    <Layout>
      <ViewCountry
        logoFederation="./images/logo-federacion-gales.png"
        nameCountry="GALES"
        imgTeam="./images/team-gales.png"
        description="Con su presencia en Qatar, los dragones rojos le pondrán fin a una prolongada ausencia 
                    de más de seis décadas sin disputar un Mundial. Aunque no figuran como candidatos para 
                    avanzar a octavos, su reciente crecimiento a nivel europeo podría permitirles ilusionarse 
                    con ser el equipo 'revelación' del torneo."
        nameDT="ROB PAGE"
        imgDT="./images/dt-gales.png"
        egeDT="48 años"
        bjdDT="Galés, - en el cargo desde 2022"
        nameStar="GARETH BALE"
        imgStar="./images/estrella-gales.png"
        ageStar="33 años"
        teamStar="Los Ángeles F.C"
        participation="2"
        majorResult="Cuartos de Final (Copa mundial de Fútbol de 1958)"
        dataInfo="Estadística positiva: en su única participación en un Mundial (Suecia 1958), consiguió 
                  un meritorio quinto lugar."
        dataInfo2="Estadística negativa: De las 32 clasificadas a esta edición, es la selección que más 
                  tiempo pasó sin jugar una Copa del Mundo (64 años)."
      />
    </Layout>
  )
}

export default Gales