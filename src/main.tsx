import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardPage from "./pages/CardPage.tsx";
import Home from "./pages/Home.tsx";
import { CardProvider } from "./context/CardContext.tsx";
import CardIdPage from "./pages/CardIdPage.tsx";
import AddCardPage from "./pages/AddCardPage.tsx";
import { UserProvider } from "./context/UserContext.tsx";

//App.js

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CardProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="cardpage" element={<CardPage />} />
              <Route path="card/:id" element={<CardIdPage />} />
              <Route path="addcardpage" element={<AddCardPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </CardProvider>
  </StrictMode>
);
