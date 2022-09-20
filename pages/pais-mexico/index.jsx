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
        description="Arabia Saudita fue uno de los mejores equipos en las eliminatorias asiáticas y no tuvo 
                    problemas para obtener el boleto directo después de ubicarse en el segundo puesto del 
                    Grupo B. Las águilas verdes se caracterizan por contar con jugadores de su liga local 
                    y en su sexta participación en el certamen tendrán la dura tarea de superar a México, 
                    Argentina y Polonia."
        nameDT="HERVÉ RENARD"
        imgDT="./images/dt-mexico.png"
        egeDT="53 años"
        bjdDT="Francés, - en el cargo desde 2019"
        nameStar="SALEH AL-SHEHRI"
        imgStar="./images/estrella-mexico.png"
        ageStar="28 años"
        teamStar="AL-HILAL"
        participation="5"
        majorResult="Campeones del mundo (Copa mundial de Fútbol de 1978, 1986)"
        dataInfo="Dato positivo: las Águilas Verdes acudieron a seis de las últimas ocho justas mundialistas."
        dataInfo2="Dato negativo: el elenco saudí no logra superar la fase de grupo desde Estados Unidos 1994 
                  (alcanzaron los octavos de final)."
      />
    </Layout>
  )
}

export default Mexico