import React from 'react'
import Layout from 'Layout'
import ViewGroup from 'Components/ViewGroup'

import FixtureGrupoG from 'Components/OptaCompeticion/Fixture/fix-grupo-g'
import OptaGrupoG from 'Components/OptaCompeticion/TablePosition/opta-grupo-g'

const GroupG = () => {
  return(
    <Layout>
      <ViewGroup
        key="G"
        group="G"
        fixture = {<FixtureGrupoG/>}
        tablePosition = {<OptaGrupoG/>}
      />
    </Layout>
  )
}

export default GroupG