// isLoggedin
export const isLoggedin = () => {
  let data = localStorage.getItem("user");
  if (data != null) return true;
  else return false;
};
