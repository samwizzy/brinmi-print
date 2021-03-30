import React from "react";
import { renderRoutes } from "react-router-config";
import { Snackbar } from "@brinmi";
import Header from "./components/Header/Header";
import SecondaryNavigation from "./components/SecondaryNavigation/SecondaryNavigation";
import Footer from "./components/Footer/Footer";
import PartnerWithUsDialog from "./../main/partner/component/PartnerWithUsDialog"

export default function Layout({ route, children }) {
  return (
    <div>
      <div className="container mx-auto">
        <Header />
        <SecondaryNavigation />
      </div>

      <main className="container mx-auto">
        <Snackbar />
        {renderRoutes(route.routes)}
        {children}
      </main>

      <div className="container mx-auto">
        <Footer />
      </div>

      <PartnerWithUsDialog />
    </div>
  );
}
