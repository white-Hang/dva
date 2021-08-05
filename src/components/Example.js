import React from "react";
import { withRouter, Link, routerRedux } from "dva/router";
import qs from "query-string";
const Example = ({ history, dispatch }) => {
  return (
    <div>
      Example
      <button onClick={() => history.go(-1)}>history</button>
      <Link to="/">Link</Link>
      <button
        onClick={() => dispatch(routerRedux.push("/", { title: "没完没了了" }))}
      >
        routerRedux
      </button>
      <button onClick={() => routerReduxQs(dispatch)}>routerReduxQs</button>
    </div>
  );
};
const routerReduxQs = (dispatch) => {
  dispatch(
    routerRedux.push({
      pathname: "/",
      search: qs.stringify({
        from: "example",
      }),
    })
  );
};

Example.propTypes = {};

export default withRouter(Example);
