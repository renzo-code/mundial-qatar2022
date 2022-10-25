import React from 'react'
import Layout from 'Layout'
import ViewCountry from 'Components/ViewCountry'

const Brasil = () => {
  return(
    <Layout>
      <ViewCountry
        logoFederation="./images/logo-federacion-brasil.png"
        nameCountry="BRASIL"
        imgTeam="./images/team-brasil.png"
        description="Comandados por Tite y Neymar, la Canarinha busca revalidar su título como la 
                    única selección con más copas del mundo y, finalmente, poder conseguir la sexta 
                    estrella. En lo que respecta a la selección, llegan ‘encendidos’, pues no 
                    perdieron en las eliminatorias rumbo a Qatar 2022 y de 17 partidos jugados, 
                    ganaron 14 y solo empataron en tres."
        nameDT="ADENOR BACCHI (TITE)"
        imgDT="./images/dt-brasil.png"
        egeDT="61 años"
        bjdDT="Brasileño, - en el cargo desde 2016"
        nameStar="NEYMAR SANTOS JR."
        imgStar="./images/estrella-brasil.png"
        ageStar="30 años"
        teamStar="Paris Saint-Germain F.C"
        participation="21"
        majorResult="Campeón del mundo (Copa mundial de Fútbol 1958, 1962, 1970, 1994 y 2002)"
        dataInfo="Estadística positiva: es la selección más ganadora en la historia. De las 7 finales que 
                  disputó, ganó cinco (1958, 1962, 1970, 1994 y 2002) y fue subcampeón en 1950 y 1998"
        dataInfo2="Estadística negativa: registra una de las mayores goleadas en la historia de los 
                  mundiales: Alemania la aplastó 7-1 en Brasil 2014."
      />
    </Layout>
  )
}

export default Brasil