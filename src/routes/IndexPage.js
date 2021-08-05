import React from "react";
import { connect } from "dva";
import styles from "./IndexPage.css";
import { counterAdd, counterAsyncAdd } from "../actions";
import qs from "query-string"
function IndexPage({ count, dispatch, counterAdd, counterAsyncAdd, history,location }) {
  const {search}  = location
  const {from} = qs.parse(search)
  return (
    <div className={styles.normal}>
      <div>下方数字</div>
      <p>{count}</p>
      {/* <button onClick={() => dispatch({ type: "counter/add" })}>+</button>
      <button onClick={() => dispatch({ type: "counter/asyncAdd" })}>
        asyncAdd+
      </button> */}
      <button onClick={() => counterAdd()}>+</button>
      <button onClick={() => counterAsyncAdd()}>asyncAdd+</button>
      <button onClick={() => history.push('/home',{count}) }>goHomePage</button>
      <div>{location.state&&location.state.title?location.state.title:"真没了"}</div>
      <div>{from}</div>
    </div>
  );
}

IndexPage.propTypes = {};

export default connect((state) => state.counter, {
  counterAdd,
  counterAsyncAdd,
})(IndexPage);
