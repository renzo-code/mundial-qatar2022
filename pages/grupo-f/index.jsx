import React from 'react'
import Layout from 'Layout'
import ViewGroup from 'Components/ViewGroup'

import FixtureGrupoF from 'Components/OptaCompeticion/Fixture/fix-grupo-f'
import OptaGrupoF from 'Components/OptaCompeticion/TablePosition/opta-grupo-f'

const GroupF = () => {
  return(
    <Layout>
      <ViewGroup
        key="F"
        group="F"
        fixture = {<FixtureGrupoF/>}
        tablePosition = {<OptaGrupoF/>}
      />
    </Layout>
  )
}

export default GroupF