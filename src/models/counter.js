import { delay } from "redux-saga";
import { pathToRegexp} from "path-to-regexp";
export default {
  namespace: "counter",

  state: {
    count: 1,
  },
  //effects和reducers里的方法名称一样的话，会无限触发当前函数
  effects: {
    *asyncAdd({ payload }, { call, put }) {
      yield delay(1000);
      yield put({ type: "add" });
    },
  },

  reducers: {
    add(state, action) {
      console.log(action, "acrtion");
      return { count: state.count + 1 };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
      window.onresize = () => {
        dispatch({ type: "add" });
      };
    },
    onClick({ dispatch, history }) {
      // eslint-disable-line
      document.addEventListener("click", () => {
        dispatch({ type: "add" });
      });
    },
    setuoHistory({ dispatch, history }) {
      history.listen((location) => {
        console.log(location, "location");
        // if (location.pathname === "/") {
        //   dispatch({ type: "add" });
        // }
        const match = pathToRegexp("/").exec(location.pathname);
        if (match) {
          dispatch({ type: "add" });
        }
      });
    },
  },
};
