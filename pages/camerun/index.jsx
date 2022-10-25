import React from 'react'
import Layout from 'Layout'
import ViewCountry from 'Components/ViewCountry'

const Camerun = () => {
  return(
    <Layout>
      <ViewCountry
        logoFederation="./images/logo-federacion-camerun.png"
        nameCountry="CAMERÚN"
        imgTeam="./images/team-camerun.png"
        description="Los Leones Indomables han sido una selección que desde hace cuatro décadas está en los ojos 
                    del mundo por los buenos jugadores que ha formado. No obstante, su llegada a Qatar fue 
                    agónica: el gol que los clasificó se marcó en el minuto 124 ante Argelia. Su mejor 
                    participación en mundiales fue en Italia 90, cuando llegó hasta cuartos de final."
        nameDT="RIGOBERT SONG"
        imgDT="./images/dt-camerun.png"
        egeDT="46 años"
        bjdDT="Camerunés, - en el cargo desde 2022"
        nameStar="VINCENT ABOUBAKAR"
        imgStar="./images/estrella-camerun.png"
        ageStar="30 años"
        teamStar="Al-Nassr F.C"
        participation="8"
        majorResult="Cuartos de Final (Copa mundial de Fútbol de 1990)"
        dataInfo="Estadística positiva: Camerún ha participado en 7 mundiales antes de Qatar."
        dataInfo2="Estadística negativa: Quedó en último lugar en Brasil 2014 y penúltimo en Sudáfrica 2010."
      />
    </Layout>
  )
}

export default Camerun