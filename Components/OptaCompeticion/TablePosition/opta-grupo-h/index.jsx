import React from "react"

const OptaGrupoH = () => {
  return (
    <>
      <div className="cgrid-row" id="scrollToOpta">
        <div className="col-300-offset-md col-300-offset-sm col-300-offset-xs">
          <div id="position">
            <opta-widget 
              widget="standings" competition="4" season="2022" team="359" template="normal" 
              live="false" default_nav="1" side="combined" data_detail="full" show_key="true" 
              show_crests="true" points_in_first_column="false" lose_before_draw="false" 
              show_form="6" competition_naming="full" team_naming="full" 
              date_format="dddd D MMMM YYYY" sorting="false" show_live="false" 
              show_relegation_average="false" show_logo="false" show_title="false" 
              breakpoints="400" sport="football">
            </opta-widget>
          </div>
        </div>
      </div>
    </>
  )
}

export default OptaGrupoH