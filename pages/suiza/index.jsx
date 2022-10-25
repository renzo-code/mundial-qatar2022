import React from 'react'
import Layout from 'Layout'
import ViewCountry from 'Components/ViewCountry'

const Suiza = () => {
  return(
    <Layout>
      <ViewCountry
        logoFederation="./images/logo-federacion-suiza.png"
        nameCountry="SUIZA"
        imgTeam="./images/team-suiza.png"
        description="Tras una infartante definición en la fase de grupos de las eliminatorias europeas, Suiza 
                    logró ganar su zona, mandó a Italia al repechaje y consiguió el cupo directo a Qatar 2022. 
                    Pese a no contar con grandes figuras, el técnico Murat Yakin formó un colectivo muy sólido 
                    y cuenta con la experiencia de Xherdan Shaqiri y Granit Xhaka."
        nameDT="MURAT YAKIN"
        imgDT="./images/dt-suiza.png"
        egeDT="57 años"
        bjdDT="Suizo, - en el cargo desde 2021"
        nameStar="XHERDAN SHAQIRI"
        imgStar="./images/estrella-suiza.png"
        ageStar="30 años"
        teamStar="Chicago Fire"
        participation="11"
        majorResult="Cuartos de final (Copa mundial de Fútbol 1934, 1938 y 1954)"
        dataInfo="Estadística positiva: esta es la quinta participación consecutiva de Suiza en las 
                  Copas del Mundo. "
        dataInfo2="Estadística negativa: los suizos no logran acceder a los cuartos de final del 
                  mundial desde 1954 (en aquella edición fueron anfitriones)."
      />
    </Layout>
  )
}

export default Suiza