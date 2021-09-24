import { useState } from "react";
import OpenIssueIcon from "./OpenIssueIcon";
import CloseIssueIcon from "./CloseIssueIcon";
import IssueList from "./IssueList";

function App() {
  const [issuesFilter, setIssuesFilter] = useState(0);

  return (
    <div className="container">
      <div className="box">
        <div className="box-header">
          <div
            data-testid="open-issues"
            onClick={() =>
              setIssuesFilter((prevState) => (prevState === 1 ? 0 : 1))
            }
            className={`open-issues ${issuesFilter === 1 && "active"}`}
          >
            <OpenIssueIcon /> Open
          </div>
          <div
            data-testid="close-issues"
            onClick={() =>
              setIssuesFilter((prevState) => (prevState === 2 ? 0 : 2))
            }
            className={`close-issues ${issuesFilter === 2 && "active"}`}
          >
            <CloseIssueIcon /> Closed
          </div>
        </div>

        <IssueList issuesFilter={issuesFilter} />
      </div>
    </div>
  );
}

export default App;
