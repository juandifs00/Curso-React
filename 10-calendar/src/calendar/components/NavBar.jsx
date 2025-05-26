export const NavBar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
      <span className="navbar-brand text-white">
        <i className="fas fa-calendar-alt"></i>
        &nbsp; Calendar App &nbsp; Juandi
      </span>
      <button
        className="btn btn-outline-danger"
        onClick={() => console.log("Logout")}
      >
        <i className="fas fa-regular fa-arrow-right-from-bracket"></i>
        <span>Salir</span>
      </button>
    </div>
  );
};
