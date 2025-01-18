import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import useForm from "../../hooks/useForm";
import HeroCard from "../components/HeroCard";

const SearchPage = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const { searchText, onInputChange } = useForm({
    searchText: "",
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) {
      return;
    }

    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Buscar</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Buscar heroe</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Buscar un heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-3">Buscar</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          <div className="alert alert-info">Buscar un heroe</div>

          <div className="alert alert-danger">
            No hay resultados para <b>{q}</b>
          </div>

          {/* <HeroCard /> */}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
