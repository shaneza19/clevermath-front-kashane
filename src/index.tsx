import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import SideBarContextProvider from "./contexts/SideBarContext";

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <BrowserRouter>
    <SideBarContextProvider>
      <App />
    </SideBarContextProvider>
  </BrowserRouter>
);
