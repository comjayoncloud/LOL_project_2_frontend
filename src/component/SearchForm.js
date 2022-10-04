import "./SearchForm.css";

export default function SearchForm() {
  return (
    <div className="SearchForm">
      <div className="title">
        <h1>Anonymous Instagram viewer</h1>

        <p>Enter username in search bar using forramts username</p>
      </div>
      <form className="f-search">
        <div className="f-input">
          <input type="text" placeholder="Enter ur username"></input>
          <button className="search-button"></button>
        </div>
      </form>
    </div>
  );
}
