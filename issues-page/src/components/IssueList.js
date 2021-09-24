import useInfiniteScroll from '../hooks/useInfiniteScroll';
import Loading from './Loading';

function IssueList() {
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  function fetchMoreListItems() {}

  return (
    <>
      <div className="issues" data-testid="issues"></div>
      {/* <Loading /> */}
    </>
  );
}

export default IssueList;
