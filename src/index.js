import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "./contexts/ContextProvider";
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
