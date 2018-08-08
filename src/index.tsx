import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import AppContainer from "./AppContainer";
import rootReducer from "./reducers";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
