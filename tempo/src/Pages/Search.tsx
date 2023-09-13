import { Outlet } from "react-router-dom";

const Search = () => {
  return (
    <section className="container">
      {/* <h1 className={Styles.subHeading}>Search Home Page</h1> */}
      <Outlet />
    </section>
  );
};

export default Search;
