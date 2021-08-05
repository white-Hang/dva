import axios from "axios";
import * as apis from "../services/example";
export default {
  namespace: "userPage",

  state: {
    // isFetching: false,
    error: null,
    user: null,
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      // eslint-disable-line
      yield put({ type: "fetch/start" });
      try {
        //axios方法调函数
        // const user = yield call(
        //   axios.get,
        //   "https://jsonplaceholder.typicode.com/users"
        // );
        // yield put({ type: "fetch/success", user });

        //fetch方法调函数
        const user = yield call(apis.fetchSuccess);
        yield put({ type: "fetch/success", user });
      } catch (e) {
        yield put({ type: "fetch/error", error: e.message });
      }
    },
  },

  reducers: {
    "fetch/start"(state, action) {
      return {
        // isFetching: true,
        error: null,
        user: null,
      };
    },
    "fetch/success"(state, action) {
      return {
        // isFetching: false,
        error: null,
        user: action.user,
      };
    },
    "fetch/error"(state, action) {
      return {
        // isFetching: false,
        error: action.error,
        user: null,
      };
    },
  },
};
