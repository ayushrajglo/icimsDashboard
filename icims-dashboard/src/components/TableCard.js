import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
const TableCard = ({ table, tabs }) => {
  console.log("table ",table)
  console.log("tabs ",tabs)
  return (
    <>
      <div className="wrapperContainer">
        <Tabs>
          <div className="top-section">
            <div>
              <FontAwesomeIcon
                icon={faSuitcase}
                style={{ color: "#000", marginRight: "5px" }}
              />

              <fieldset>
                <legend>Select Cases</legend>
                <select>
                  <option value="volvo">Volvo</option>
                </select>
              </fieldset>
            </div>
            <div>
              <TabList>
                {tabs.map((tab) => (
                  <Tab>{tab}</Tab>
                ))}
              </TabList>
            </div>
          </div>
          <TabPanel>
            <div className="actions">
              <span>search</span>
              <span>actions</span>
            </div>
            <table>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>Case No.</th>
                  <th>Contact Name</th>
                  <th>Subject</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <th>Date Time Opened</th>
                  <th>case</th>
                </tr>
              </thead>
              <tbody>
                {table.map((item) => {
                  return (
                    <tr >
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td >{item.caseNo}</td>
                      <td>{item.name}</td>
                      <td>{item.subject}</td>
                      <td>{item.status}</td>
                      <td>{item.priority}</td>
                      <td>{item.datetime}</td>
                      <td>{item.case}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </TabPanel>
          <TabPanel>
            <h2>Accept</h2>
          </TabPanel>
          <TabPanel>
            <h2>Change commer</h2>
          </TabPanel>
          <TabPanel>
            <h2>print tab</h2>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default TableCard;
