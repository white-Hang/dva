import React from "react";
import { connect } from "dva";
const UserPage = ({ userPage, dispatch, loading }) => {
  console.log(loading, "loacing");
  const { error, user } = userPage;
  let isFetching = loading.effects['userPage/fetch']
  let data;
  if (error) {
    data = error;
  } else if (isFetching) {
    data = "loading";
  } else {
    data = user && user.data[0].name;
  }
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={() => dispatch({ type: "userPage/fetch" })}>
        get User
      </button>
      <button onClick={() => dispatch({ type: "userPage/fetch/start" })}>
        同步
      </button>
    </div>
  );
};
export default connect((state) => {
  return state;
})(UserPage);
