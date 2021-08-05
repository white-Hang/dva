import { createAction } from "redux-actions";

export const counterAdd = createAction("counter/add");
export const counterAsyncAdd = createAction("counter/asyncAdd");

// export const counterAdd = () => ({ type: "counter/add" });
// export const counterAsyncAdd = () => ({ type: "counter/asyncAdd" });
