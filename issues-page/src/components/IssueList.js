import { useState, useEffect } from "react";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import Loading from "./Loading";
import IssueItem from "./IssueItem";

function IssueList({ issuesFilter }) {
  const [isIssuesFinished, setIsIssuesFinished] = useState(false);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIssues([]);
    setIsIssuesFinished(false);
    setIsFetching(true);
    setPage(1);
  }, [issuesFilter, setIsFetching]);

  function fetchMoreListItems() {
    if (isIssuesFinished) {
      return;
    }
    fetch(
      `http://localhost:9000/issues?page=${page}&issuesFilter=${issuesFilter}`
    )
      .then((response) => response.json())
      .then((givenIssues) => {
        if (givenIssues.length === 0) {
          setIsIssuesFinished(true);
          setIsFetching(false);
        } else {
          setIssues((prevIssues) => [...prevIssues, ...givenIssues]);
          setPage((prevPage) => prevPage + 1);
          setIsFetching(false);
        }
      });
  }

  return (
    <>
      <div className="issues" data-testid="issues">
        {issues.map((issue, idx) => (
          <IssueItem issue={issue} key={idx} />
        ))}
      </div>
      {/* <Loading /> */}
      {isFetching && <Loading />}
    </>
  );
}

export default IssueList;
