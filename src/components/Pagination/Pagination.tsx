import { Button } from "..";

interface IProps {
  count: number;
  pageSize: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination = (props: IProps): JSX.Element => {
  const { count = 82, pageSize = 10, currentPage = 1, setCurrentPage } = props;

  const totalPages = Math.ceil(count / pageSize);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Button onClick={() => handleNext()}>Prev</Button>
      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          key={index + 1}
          onClick={() => handlePageClick(index + 1)}
          disabled={currentPage === index + 1}
          style={{ fontWeight: currentPage === index + 1 ? "bold" : "normal" }}
        >
          {index + 1}
        </Button>
      ))}
      <Button onClick={() => handlePrev()}>Next</Button>
    </div>
  );
};

export default Pagination;
