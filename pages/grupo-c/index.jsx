import React from 'react'
import Layout from 'Layout'
import ViewGroup from 'Components/ViewGroup'

import OptaGrupoC from 'Components/OptaCompeticion/TablePosition/opta-grupo-c'
import FixtureGrupoC from 'Components/OptaCompeticion/Fixture/fix-grupo-c'

const GroupC = () => {
  return(
    <Layout>
      <ViewGroup
        key="C"
        group="C"
        fixture = {<FixtureGrupoC/>}
        tablePosition = {<OptaGrupoC/>}
      />
    </Layout>
  )
}

export default GroupC