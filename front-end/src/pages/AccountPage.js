import { useState, useCallback, useEffect } from "react";

const AccountPage = () => {
    const [user,setUser] = useState(null);

    useEffect(() => {
        const getUser = async () => {
        fetch("http://localhost:5000/auth/login/success", {
            method: "GET",
            credentials: "include",
            headers: {
            Accept: "application/json",
            "Acess-Control-Allow-Credentials": true,
            },
        }).then(response => {
            if (response.status === 200) return response.json();
            throw new Error("Authentication Failed!")
        }).then(resObject => {
            setUser(resObject.user)
        }).catch(err => {
            console.log(err);
        });
        };
        getUser();
    }, []);

    console.log(user);

    const logoutHandleClick = () => {
        window.open("http://localhost:5000/auth/logout", "_self");
      };

      const name = user ? user.displayName : "Guest";
  return (
    <div>
      Hello, {name}!
      <span onClick={logoutHandleClick}>logout</span>
    </div>
  );
};

export default AccountPage;