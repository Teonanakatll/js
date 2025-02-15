import Header from "./components/Header";
import TeachingSection from "./components/TeachingSection";
import ButtonSection from "./components/ButtonSection";

import { differences } from "./data"
import Button from "./components/Button/Button";
// импортируем из реакт useState, это хук с помощю которого мы можем создвавть локальные состояния для компонента
import { useState } from "react";
import IntroSection from "./components/IntroSection";
2 - 07

export default function App() {
 

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TeachingSection />
        <ButtonSection />
      </main>
    </>
  );
}
