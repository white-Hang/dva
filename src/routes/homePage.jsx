import React from "react";
import { connect } from "dva";
import Example from "../components/Example"
const HomePage = ({ count,history,dispatch }) => {
  return (
    <div>
      <span>我是home组件</span>
      <span>我是count数量：{count}</span>
      <Example dispatch={dispatch}></Example>
    </div>
  );
};
export default connect((state) => state.counter)(HomePage);
