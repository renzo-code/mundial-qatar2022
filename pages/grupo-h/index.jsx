import React from 'react'
import Layout from 'Layout'
import ViewGroup from 'Components/ViewGroup'

import FixtureGrupoH from 'Components/OptaCompeticion/Fixture/fix-grupo-h'
import OptaGrupoH from 'Components/OptaCompeticion/TablePosition/opta-grupo-h'

const GroupH = () => {
  return(
    <Layout>
      <ViewGroup
        key="H"
        group="H"
        fixture = {<FixtureGrupoH/>}
        tablePosition = {<OptaGrupoH/>}
      />
    </Layout>
  )
}

export default GroupH