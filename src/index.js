import dva from "dva";
import "./index.css";
import { createBrowserHistory as createHistory } from "history";
import createLoading from "dva-loading";
import { createLogger } from "redux-logger";

const extraReducers = {
  form(state = false, action) {
    switch (action.type) {
      case "SHOW":
        return true;
      case "HIDE":
        return false;
      default:
        return state;
    }
  },
};
// 1. Initialize
const app = dva({
  history: createHistory(),
//   onAction: createLogger(),
  extraReducers,
});

// 2. Plugins
// app.use({});
app.use(createLoading());
// 3. Model
require("./models").default.forEach((key) => app.model(key.default));

// 4. Router
app.router(require("./router").default);

// 5. Start
app.start("#root");
