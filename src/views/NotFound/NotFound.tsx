import { Link } from "react-router";

const NotFound = () => {
  return (
    <>
      <div>Sorry, the page doesn`t exist.</div>
      <Link to="/">Go to main page</Link>
    </>
  );
};

export default NotFound;
