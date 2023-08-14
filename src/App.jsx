// alternative 版本
// 目標：製作一次只能顯示一個 info 的 functionality
// 舉例：當 A 的 info 是顯示的情況下，按下 B 的按鈕，顯示 B 的 info，而 A 的 info 會自動關閉

import { useState, createContext, useContext } from "react";

import Questions from "./Questions";
import questions from "./data";

const AppContext = createContext();
// export custom Hook
export const useAppContext = () => useContext(AppContext);

const App = () => {
  // 重點
  // You can control all children component in parent component but you can't control all children component from one single child component
  // since useState only affects only that one particular child component (這也是為什麼不直接設定在 SingleQuestion component 的原因)
  const [data, setData] = useState(questions);
  const [activeId, setActiveId] = useState(null);

  const buttonHandler = (id) => {
    // 處理打開 A 後，下一次再按下 A 卻關不起來的 bug
    if (id === activeId) {
      return setActiveId(null);
    } else {
      return setActiveId(id);
    }
  };

  console.log(activeId);

  return (
    <AppContext.Provider value={{ activeId, buttonHandler }}>
      <main>
        <Questions data={data} />
      </main>
    </AppContext.Provider>
  );
};
export default App;
