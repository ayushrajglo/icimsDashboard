import { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";


const ChartCard = ({ resolution, loader, caseID, caseIDLoader  }) => {
  
  const result=()=>{
    let data = resolution.split('\n')
    let caseid = caseID
    return(
      <>
      <div>Reference Case ID -{ caseIDLoader ? "----": <a href="javascript:void(0)">{caseid}</a>} </div>
      <ul>
        {data.map((item)=><li>{item}</li>)}
      </ul>
      </>
    )
  }
  return (
    <div className="box sentiment">

      {/* <div className="dough-chart">
        <PieChart width={250} height={200}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={getData()}
            cx={130}
            cy={100}
            innerRadius={30}
            outerRadius={50}
            fill="#F6C344"
            dataKey="value"
            onMouseEnter={onPieEnter}
          />
        </PieChart>
      </div> */}
      {resolution == "" && loader === false ? "Please select subject to see the Resolution" : loader ? <div className="laoding"><div className="loader"></div>Getting resolution</div> : result() }
    </div>
  );
};

export default ChartCard;
