// isLoggedin
export const isLoggedin = () => {
  let data = localStorage.getItem("email");
  if (data != null) return true;
  else return false;
};

