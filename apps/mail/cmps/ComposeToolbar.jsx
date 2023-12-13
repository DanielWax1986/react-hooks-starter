const { Link } = ReactRouterDOM;

export function ComposeToolbar() {
  return (
    <div className="header-compose">
      <button>
        <Link to="/mail">
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
      </button>
      <h1>Compose</h1>
      <button>
        <i className="fa-solid fa-file-arrow-up"></i>
      </button>
      <button>
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </button>
    </div>
  );
}
