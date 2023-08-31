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
  const [caseID, setCaseID]= useState("")
  const [loader, setLoader] = useState(false)
  const [caseIDLoader, setCaseIDLoader] = useState(false)
  const posts = tableData;
  const [postsPerPage, setPostsPerPage] = useState(5);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  

  const handleResolution = async (subject,elem) => {
    let formdata = new FormData();
    let formdataCaseID = new FormData();
    setLoader(true);
    setCaseIDLoader(true)
    let activeClass = document.querySelectorAll('table tr td')
    for (let i = 0; i < activeClass.length; i++) {
      activeClass[i].classList.remove('active')
    }
    elem.target.classList.add('active');

    formdata.append("search", `give me the resolution on how to ${subject}`);
    let requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    try{
    let resolutionResponse = await fetch("http://127.0.0.1:2002/query", requestOptions)
    let resolutionResponseJson = await resolutionResponse.json()
    setLoader(false);
    setResolution(resolutionResponseJson.message)
    }
    catch(err){
      console.log("err =>",err)
    }

    formdataCaseID.append("search", `give me the caseid on how to ${subject}`);
    let requestOptionsCaseID = {
      method: 'POST',
      body: formdataCaseID,
      redirect: 'follow'
    };

    try{
      let caseResponse = await fetch("http://127.0.0.1:2002/query", requestOptionsCaseID)
      let caseResponseJson= await caseResponse.json()
      setCaseIDLoader(false)
      setCaseID(caseResponseJson.message)
      //console.log("caseResponseJson.message=> ",caseResponseJson.message)
      }
      catch(err){
        console.log("erro=> ",err)
      }
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
          <ChartCard table={tableData}  resolution={resolution} loader={loader} caseID={caseID} caseIDLoader={caseIDLoader} />
          <IntentCard />
          <SentimentCard table={tableData} />
        </div>
      </div>
    </div>
  );
}