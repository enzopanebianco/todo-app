import React, { Fragment, useState } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import MainApp from "./components/MainApp";
import { LightTheme } from "./Theme/colors";
import store from './store';

function App() {
  const [theme,setTheme] = useState(LightTheme);

  return (
    <Fragment>
      <Provider store={store}> {/*PROVIDER DO REDUX*/}
       <ThemeProvider theme={theme}> {/*PROVIDER DO STYLED COMPONENTS SETANDO O TEMA  */}
        <MainApp setTheme={setTheme} theme={theme} /> {/*COMPONENENTE PRINCIPAL DA APLICAÇÃO*/}
      </ThemeProvider>
      </Provider>
    </Fragment>
  );
}

export default App;
