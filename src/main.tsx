
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    const swUrl = `${import.meta.env.BASE_URL}service-worker.js`;
    navigator.serviceWorker
      .register(swUrl)
      .catch((error) => console.error("Service worker registration failed:", error));
  });
}
  
