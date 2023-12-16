const { Link } = ReactRouterDOM;
import { localStorageService } from "../../../services/storage.service.js";

export function ComposeToolbar({ setIsComposeShown }) {
  const themeColor = localStorageService.loadFromStorage("PAGE_COLOR");
  return (
    <div className="header-compose" style={{ backgroundColor: themeColor }}>
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
