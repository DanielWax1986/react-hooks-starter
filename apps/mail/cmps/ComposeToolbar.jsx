const { Link } = ReactRouterDOM;

export function ComposeToolbar({ setIsComposeShown }) {
  return (
    <div className="header-compose">
      <button
        onClick={() => {
          setIsComposeShown({ isShown: false, sendTo: "" });
        }}
      >
        <i className="fa-solid fa-arrow-left"></i>
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
