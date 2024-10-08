import { useState } from "react";
import { UserContext } from "./UserContext";

// const user = {
//   id: 1,
//   name: "Jhon Doe",
//   email: "jhonDoe@example.com",
// };

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    //   <UserContext.Provider value={{ hola: "Mundo", user }}>
    <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
