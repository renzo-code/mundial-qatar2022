import React from 'react'
import Layout from 'Layout'
import ViewGroup from 'Components/ViewGroup'

import FixtureGrupoB from 'Components/OptaCompeticion/Fixture/fix-grupo-b'
import OptaGrupoB from 'Components/OptaCompeticion/TablePosition/opta-grupo-b'

const GroupB = () => {
  return(
    <Layout>
      <ViewGroup
        key="B"
        group="B"
        fixture = {<FixtureGrupoB/>}
        tablePosition = {<OptaGrupoB/>}
      />
    </Layout>
  )
}

export default GroupB