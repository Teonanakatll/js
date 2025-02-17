import Header from "./components/Header/Header";
import TeachingSection from "./components/TeachingSection";
import ButtonSection from "./components/ButtonSection";

import { differences } from "./data"
import Button from "./components/Button/Button";
// импортируем из реакт useState, это хук с помощю которого мы можем создвавть локальные состояния для компонента
import { useState } from "react";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import FeedbackSection from "./components/FeedbackSection";
import EffectSection from "./components/EffectsSection";


export default function App() {
  // создаём компонент который будет отвечать за состояние кнопки перехода
  // КОМПОНЕНТЫ СО СТЕЙТАМИ НАЗЫВАЮТСЯ УМНЫМИ, БЕЗ НИХ ГЛУПЫМИ
  const [tab, setTab] = useState('effect')

  const [visible, setVisible] = useState(true)

  // setTimeout(() => {
  //   setVisible(false)
    
  // }, 3000)

  return (
    <>
      {visible && <Header />}
      <main>
        <IntroSection />
        {/* передаём в компонент значение стейта и ссылку на функцию которая меняет стейт тоесть App прокидывает в промежуточный 
            элемент значение стейта и ссылку на функцию для его изменения в промежуточный компонент <TabsSection active={tab} onChange={(current) => setTab(current)} />. 
            компонент TabSection принимает стейт формирует из него другой булевый пропс для отрисовки активного класса и 
            перекидывает дальше функцию изменения стейта присвоив его в переменную под именем которое ожидает компонент 
            кнопки и передаёт в неё значение для изменения в стейте <Button isAct={active === 'main'} onPress={() => onChange('main')}>Главноя</Button>,
            ну а кнопка просто устанавливает переданную функцию пропс в свой обработчик клика и устанавливает или снимает активный класс <button className={classes} onClick={onPress}>
        */}
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {/* в зависимости от значения стейта tab рендерим разные компоненты на странице */}
        {tab === 'main' && (
          <>
            <TeachingSection />
            <ButtonSection />
          </>
        )}
        {tab === 'feedback' && (<FeedbackSection />)}

        {tab === 'effect' && (<EffectSection />)}
        
      </main>
    </>
  );
}
