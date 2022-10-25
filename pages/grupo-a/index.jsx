import React from 'react'
import Layout from 'Layout'
import ViewGroup from 'Components/ViewGroup'

import OptaGrupoA from 'Components/OptaCompeticion/TablePosition/opta-grupo-a'
import FixtureGrupoA from 'Components/OptaCompeticion/Fixture/fix-grupo-a'

const GroupA = () => {
  return(
    <Layout>
      <ViewGroup
        key="A"
        group="A"
        fixture= <FixtureGrupoA/>
        tablePosition = <OptaGrupoA/>
      />
    </Layout>
  )
}

export default GroupA