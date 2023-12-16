import { localStorageService } from "../services/storage.service.js";
export function About() {
  const themeColor = localStorageService.loadFromStorage("PAGE_COLOR");
  return (
    <section className="about" style={{ backgroundColor: themeColor }}>
      <h1>About Page</h1>
    </section>
  );
}
