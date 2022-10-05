import useFetch from "../hooks/useFetch";
import "./SearchForm.css";

export default function SearchForm() {
  // const jaewoo = useFetch(
  //   "https://www.lolproject-bakcend.com/api/allinfo?id=빵뒤를흔드록바"
  // );
  function handleSubmit(e) {
    console.log("clicked submit", e.target.value);
    e.preventDefault();
  }
  return (
    <div className="SearchForm">
      <div className="title">
        <h1>Anonymous Instagram viewer</h1>

        <p>Enter username in search bar using forramts username</p>
      </div>
      <form className="f-search" onSubmit={handleSubmit}>
        <div className="f-container">
          <div className="f-input">
            <input type="text" placeholder="Enter ur username"></input>
            <button className="search-button"></button>
          </div>
        </div>
      </form>
    </div>
  );
}
