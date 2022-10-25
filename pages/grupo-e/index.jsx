import React from 'react'
import Layout from 'Layout'
import ViewGroup from 'Components/ViewGroup'

import OptaGrupoE from 'Components/OptaCompeticion/TablePosition/opta-grupo-e'
import FixtureGrupoE from 'Components/OptaCompeticion/Fixture/fix-grupo-e'

const GroupE = () => {
  return(
    <Layout>
      <ViewGroup
        key="E"
        group="E"
        fixture={<FixtureGrupoE/>}
        tablePosition = {<OptaGrupoE/>}
      />
    </Layout>
  )
}

export default GroupE