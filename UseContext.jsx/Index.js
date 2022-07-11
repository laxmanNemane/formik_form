import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext("");

const Index = (props) => {
  const [user, setUser] = useState([]);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    let admin = {
      email: "dodgeadmin@yopmail.com",
      password: "123456",
    };

    axios
      .post("https://dodgeqr.prometteur.in/api/admin/login", admin)
      .then((res) => {
        if (res) {
          setFlag(true);
          // console.log(flag)
          setUser(res.data.user);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(flag);

  // console.log(user.user_role)
  let login_type = user.user_role;

  return (
    <UserContext.Provider value={{ user, login_type }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default Index;
