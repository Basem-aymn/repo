import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link } from "react-router-dom";

export default function Nav() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center">
      <nav className="fixed top-0 w-full max-w-6xl mx-auto bg-gradient-to-r from-slate-100 to-white rounded-b-xl border border-gray-300 shadow-md flex justify-between items-center pb-3 z-50">
        <p className="ml-4 font-bold text-base text-gray-900">logo</p>
        <ul className="hidden md:flex list-none m-0 p-3 justify-center">
          <li className="mr-6 text-gray-700 cursor-pointer hover:text-emerald-600 transition-colors duration-300">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {t("Home")}
            </Link>
          </li>
          <li className="mr-6 text-gray-700 cursor-pointer hover:text-emerald-600 transition-colors duration-300">
            <Link
              to="/"
              onClick={() =>
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("About")}
            </Link>
          </li>
          <li className="mr-6 text-gray-700 cursor-pointer hover:text-emerald-600 transition-colors duration-300">
            <Link to="/services">{t("Services")}</Link>
          </li>
          <li className="mr-6 text-gray-700 cursor-pointer hover:text-emerald-600 transition-colors duration-300">
            <Link to="/packages">{t("Packages")}</Link>
          </li>
        </ul>
        <div className="flex items-center space-x-2 mr-4">
          <LanguageSwitcher />
          <button className="md:hidden p-2 hover:bg-slate-200 rounded-lg transition-colors duration-300" onClick={() => setIsOpen(!isOpen)}>
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1.5">
              <span className="block w-5 h-0.5 bg-gray-700 rounded"></span>
              <span className="block w-5 h-0.5 bg-gray-700 rounded"></span>
              <span className="block w-5 h-0.5 bg-gray-700 rounded"></span>
            </div>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-6xl mx-auto bg-white border border-gray-300 rounded-b-xl shadow-md md:hidden py-4">
          <ul className="flex flex-col list-none m-0 p-3 space-y-2">
            <li className="text-gray-700 cursor-pointer hover:text-emerald-600 transition-colors duration-300">
              <Link
                to="/"
                onClick={() => {
                  setIsOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                {t("Home")}
              </Link>
            </li>
            <li className="text-gray-700 cursor-pointer hover:text-emerald-600 transition-colors duration-300">
              <Link
                to="/"
                onClick={() => {
                  setIsOpen(false);
                  document
                    .getElementById("about")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t("About")}
              </Link>
            </li>
            <li className="text-gray-700 cursor-pointer hover:text-emerald-600 transition-colors duration-300">
              <Link to="/services" onClick={() => setIsOpen(false)}>
                {t("Services")}
              </Link>
            </li>
            <li className="text-gray-700 cursor-pointer hover:text-emerald-600 transition-colors duration-300">
              <Link to="/packages" onClick={() => setIsOpen(false)}>
                {t("Packages")}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
