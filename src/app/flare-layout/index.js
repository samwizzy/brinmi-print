import React from "react";
import { renderRoutes } from "react-router-config";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function Layout({ route }) {
  return (
    <div>
      <div className="container">
        <Header />
      </div>

      <main className="container mx-auto">{renderRoutes(route.routes)}</main>

      <div className="container">
        <Footer />
      </div>
    </div>
  );
}
