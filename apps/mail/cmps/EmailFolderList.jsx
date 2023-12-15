export function EmailFolderList() {
  return (
    <aside className="tool-sidebar">
      <button>
        <i className="fa-solid fa-inbox"></i>
        <span>Inbox</span>
      </button>
      <button>
        <i className="fa-regular fa-paper-plane"></i>
        <span>Sent</span>
      </button>
      <button>
        <i className="fa-regular fa-star"></i>
        <span>Starred</span>
      </button>
      <button>
        <i className="fa-regular fa-trash-can"></i>
        <span>Trash</span>
      </button>
    </aside>
  );
}
