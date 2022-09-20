import React from 'react'
import Layout from 'Layout'
import ViewCountry from 'Components/ViewCountry'

const PaisesBajos = () => {
  return (
    //FALTA INFORMACION
    <Layout>
      <ViewCountry
        logoFederation="./images/logo-federacion-paises-bajos.png"
        nameCountry="PAÍSES BAJOS"
        imgTeam="./images/team-paises-bajos.png"
        description="Es el país asiático con más participaciones en los Mundiales, superando 
                    incluso a otro gigante de la zona como Japón. El segundo rival de México 
                    tiene mucha expe riencia en la Copa del Mundo, torneo al que ha clasificado 
                    de manera ininterrumpida desde 1986."
        nameDT="PAULO BENTO"
        imgDT="./images/dt-paises-bajos.png"
        egeDT="47 años"
        bjdDT="Español, - en el cargo desde 2018"
        nameStar="SON HEUNG-MIN"
        imgStar="./images/estrella-paises-bajos.png"
        ageStar="24 años"
        teamStar="Tottenham Hotspur"
        participation="12"
        majorResult="4º lugar (Copa mundial de Fútbol de 2002)"
      />
    </Layout>
  )
}

export default PaisesBajos