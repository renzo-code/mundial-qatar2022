import React from 'react'
import Layout from 'Layout'
import ViewGroup from 'Components/ViewGroup'

import OptaGrupoD from 'Components/OptaCompeticion/TablePosition/opta-grupo-d'
import FixtureGrupoD from 'Components/OptaCompeticion/Fixture/fix-grupo-d'

const GroupD = () => {
  return(
    <Layout>
      <ViewGroup
        key="D"
        group="D"
        fixture = {<FixtureGrupoD/>}
        tablePosition = {<OptaGrupoD/>}
      />
    </Layout>
  )
}

export default GroupD