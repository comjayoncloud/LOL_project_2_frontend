import SearchForm from "./SearchForm";
import "./MainPage.css";
export default function MainPage() {
  return (
    <div className="mainpage">
      <div className="container">
        <header>
          <div className="logo">
            <a href="http://localhost:3000">
              <img
                src="https://in-stories.online/img/logo.svg"
                alt="logo"
              ></img>
            </a>
          </div>
          <ul></ul>
        </header>
        <SearchForm />
      </div>
    </div>
  );
}
