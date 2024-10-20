import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardPage from "./pages/CardPage.tsx";
import Home from "./pages/Home.tsx";
import { CardProvider } from "./context/CardContext.tsx";
import CardIdPage from "./pages/CardIdPage.tsx";

//App.js

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CardProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="cardpage" element={<CardPage />} />
            <Route path="card/:id" element={<CardIdPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CardProvider>
  </StrictMode>
);
