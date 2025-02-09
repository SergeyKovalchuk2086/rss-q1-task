import { Button } from "..";
import "./style.css";

interface IProps {
  count: number;
  changePage: (page: number) => void;
  page: number;
}

export const Pagination = (props: IProps): JSX.Element => {
  const { count, page, changePage } = props;

  const pageSize = 10;

  const totalPages = Math.ceil(count / pageSize);

  const handleNext = () => {
    if (page < totalPages) {
      changePage(page + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      changePage(page - 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    changePage(pageNumber);
  };

  return (
    <div className="pagination">
      <Button
        disabled={page <= 1}
        className="pagination-button"
        onClick={() => handlePrev()}
      >
        Prev
      </Button>
      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          className="pagination-button"
          key={index + 1}
          disabled={page === index + 1}
          onClick={() => handlePageClick(index + 1)}
          style={{ fontWeight: page === index + 1 ? "bold" : "normal" }}
        >
          {index + 1}
        </Button>
      ))}
      <Button
        disabled={page >= totalPages}
        className="pagination-button"
        onClick={() => handleNext()}
      >
        Next
      </Button>
    </div>
  );
};
