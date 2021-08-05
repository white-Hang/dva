const context = require.context("./", false, /\.js$/);
// console.log(context, "context");
// console.log(context.keys(), "keys");
// console.log(context.id, "id");
// console.log(context.resolve(context.keys()[0]),'resolve')
// console.log(context(context.keys()[0]),'module')
export default context
  .keys()
  .filter((item) => item !== "./index.js")
  .map((key) => context(key));
