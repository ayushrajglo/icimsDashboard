import React, { useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import MainCard from "./components/MainCard";
import { tableData, tabs } from "./assets/MockData";
import TableCard from "./components/TableCard";
import IntentCard from "./components/Intent";
import SentimentCard from "./components/Sentiment";
import ChartCard from "./components/PriorityChart";
import Pagination from "./components/Pagination";
import "./style/main.scss";

const mainData = [
  { id: 0, title: "Engaged conversation", value: "83" },
  { id: 1, title: "Average resolution time", value: "6.4" },
  { id: 2, title: "Average Ces score", value: "3.1" },
  { id: 3, title: "Average conversation sentiment", value: "57.7%" },
  { id: 4, title: "Reopen rate", value: "7.5%" },
  { id: 5, title: "Escalation rate", value: "5%" }
];
export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [resolution, setResolution] = useState("");
  const posts = tableData;
  const postsPerPage = 5;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleResolution = (caseID) => {
    fetch(
      "http://localhost:8000/tableData")
                  .then((res) => res.json())
                  .then((json) => {
                    let data= json.filter(function(i) {
                      return i.caseNo === caseID;
                    })
                    setResolution((data[0].description))
                  })
  };
  return (
    <div className="App">
      <Header />
      <div className="main-card-container">
        {mainData.map((card) => (
          <MainCard title={card.title} value={card.value} />
        ))}
      </div>
      <div className="mainContainer row">
        <div className="leftContainer">
          <div className="table-head">Cases Summary</div>
          <div className="left-wrapper">
            <TableCard table={currentPosts} tabs={tabs} onClick={handleResolution} />
            <Pagination
              perPage={postsPerPage}
              currentPage={currentPage}
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            />
          </div>
        </div>
        <div className="rightContainer">
          <div className="table-head">Suggested Resolution</div>
          <ChartCard table={tableData}  resolution={resolution} />
          <IntentCard />
          <SentimentCard table={tableData} />
        </div>
      </div>
    </div>
  );
}
