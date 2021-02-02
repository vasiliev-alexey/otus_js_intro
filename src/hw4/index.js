import { assignAge } from "./task1.js";

const user = {
  name: "Jon Snow",
};

// eslint-disable-next-line no-alert
const n = +prompt("enter number");
assignAge(user, n);
