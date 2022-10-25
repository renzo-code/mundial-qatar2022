import React from "react"

const FixtureGrupoC = () => {
  return (
    <>
      <div className="cgrid-row" id="scrollToOpta">
        <div className="col-300-offset-md col-300-offset-sm col-300-offset-xs">
          <div id="position">
            <opta-widget 
              widget="fixtures" fixtures_type="all" competition="4,4,4,4" 
              season="2022,2022,2022,2022" team="632,659,511,1264" template="normal" 
              live="false" show_venue="true" match_status="all" grouping="date" 
              show_grouping="true" navigation="none" default_nav="1" start_on_current="true" 
              sub_grouping="date" show_subgrouping="true" order_by="date_ascending" 
              show_crests="true" date_format="dddd D MMMM YYYY" time_format="HH:mm" 
              month_date_format="MMMM" competition_naming="full" team_naming="full" 
              pre_match="false" show_live="false" show_logo="false" show_title="false" 
              breakpoints="400" sport="football">
            </opta-widget>
          </div>
        </div>
      </div>
    </>
  )
}

export default FixtureGrupoC