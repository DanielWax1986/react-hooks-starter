const { Link } = ReactRouterDOM;

export function EmailCompose() {
  return (
    <section>
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
          <i className="fa-solid fa-paper-plane"></i>
        </button>
        <button>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </button>
      </div>

      <form className="main-compose">
        <input type="text" id="from" name="from" placeholder="From" />
        <input type="text" id="to" name="to" placeholder="To" />
        <input type="text" id="title" name="title" placeholder="Title" />
        <input type="text" id="subject" name="subject" placeholder="Subject" />
      </form>
    </section>
  );
}
