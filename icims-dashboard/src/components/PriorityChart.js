import { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

// const renderActiveShape = (props) => {
//   const RADIAN = Math.PI / 180;
//   const {
//     cx,
//     cy,
//     midAngle,
//     innerRadius,
//     outerRadius,
//     startAngle,
//     endAngle,
//     fill,
//     payload,
//     value
//   } = props;
//   const sin = Math.sin(-RADIAN * midAngle);
//   const cos = Math.cos(-RADIAN * midAngle);
//   const sx = cx + (outerRadius + 10) * cos;
//   const sy = cy + (outerRadius + 10) * sin;
//   const mx = cx + (outerRadius + 30) * cos;
//   const my = cy + (outerRadius + 30) * sin;
//   const ex = mx + (cos >= 0 ? 1 : -1) * 22;
//   const ey = my;
//   const textAnchor = cos >= 0 ? "start" : "end";

//   return (
//     <g>
//       <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
//         {payload.name}
//       </text>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={fill}
//       />
//       <Sector
//         cx={cx}
//         cy={cy}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         innerRadius={outerRadius + 6}
//         outerRadius={outerRadius + 10}
//         fill={fill}
//       />
//       <path
//         d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
//         stroke={fill}
//         fill="none"
//       />
//       <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 12}
//         y={ey}
//         textAnchor={textAnchor}
//         fill="#333"
//       >{`${value}%`}</text>
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 12}
//         y={ey}
//         dy={18}
//         textAnchor={textAnchor}
//         fill="#999"
//       ></text>
//     </g>
//   );
// };

const ChartCard = ({ resolution, loader  }) => {
  // const getData = () => {
  //   const data = [];
  //   const unique = [...new Set(table.map((item) => item.priority))];
  //   const color = ["#F6C344", "#C4513C", "#39835A"];
  //   unique.forEach((val, key) => {
  //     const totalCount = table.length;
  //     const priority = table.filter((item) => item.priority.includes(val))
  //       .length;
  //     data.push({
  //       name: val,
  //       value: Math.floor((priority / totalCount) * 100),
  //       fill: color[key]
  //     });
  //   });
  //   return data;
  // };
  // const [activeIndex, setActiveIndex] = useState(0);
  // const onPieEnter = useCallback(
  //   (_, index) => {
  //     setActiveIndex(index);
  //   },
  //   [setActiveIndex]
  // );
  const result=()=>{
    let data = resolution.split('\n')
    return(
      <ul>
        {data.map((item)=><li>{item}</li>)}
      </ul>
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
      {resolution == "" && loader === false ? "Please select subject to see the Resolution" : loader ? "Loading..." : result() }
    </div>
  );
};

export default ChartCard;
