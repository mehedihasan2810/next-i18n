"use client";

/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { SelectPicker } from "rsuite";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import "rsuite/dist/rsuite.min.css";

const languages = [
  { label: "English", value: "/auto/en" },
  { label: `Malay`, value: "/auto/ms" },
  { label: "Arabic", value: "/auto/ar" },
];

import React from "react";

const GoogleTranslate = () => {
  const [selected, setSelected] = useState<string>("/auto/en");

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "auto",
        autoDisplay: false,
        includedLanguages: "en,ms,ar", // If you remove it, by default all google supported language will be included
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    // @ts-ignore
    window.googleTranslateElementInit = googleTranslateElementInit;

    if (hasCookie("googtrans")) {
      // @ts-ignore
      setSelected(getCookie("googtrans"));
    } else {
      setSelected("/auto/en");
    }
  }, []);

  const langChange = (e, m, evt) => {
    evt.preventDefault();
    if (hasCookie("googtrans")) {
      setCookie("googtrans", decodeURI(e));
      setSelected(e);
    } else {
      setCookie("googtrans", e);
      setSelected(e);
    }
    window.location.reload();
  };

  return (
    <div>
      <div
        className="sr-only"
        id="google_translate_element"
        // style={{
        //   width: "0px",
        //   height: "0px",
        //   position: "absolute",
        //   left: "50%",
        //   zIndex: -99999,
        //   visibility: "hidden",
        // }}
      ></div>

      <SelectPicker
        data={languages}
        style={{ width: 100 }}
        value={selected}
        searchable={false}
        onSelect={(e, m, evt) => langChange(e, m, evt)}
        placeholder="Lang"
      />
    </div>
  );
};

export default GoogleTranslate;
