import React, { useState } from "react";
import { Header } from "./components/Header";
import { ChooseDate } from "./components/ChooseDate";
import { RouterConfig } from "./navigation/RouterConfig";
function App() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="_container">
      <Header />
      <RouterConfig date={date} setDate={setDate} />
    </div>
  );
}

export default App;
