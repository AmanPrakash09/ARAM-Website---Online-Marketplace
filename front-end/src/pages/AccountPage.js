import { useState, useCallback, useEffect } from "react";
import axios from "axios";

const AccountPage = ({ user }) => {

    const [rugNames, setRugNames] = useState([]);

    const fetchUserCollection = async () => {
        if (!user) {
            return;
        }

        try {
            const response = await axios.get(`http://localhost:5000/myCollection?user_id=${user.displayName + user.id}`);
            setRugNames(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchUserCollection();
    }, [user]);

    const handleDelete = async (rug_name) => {
        if (!user) {
            return;
        }

        try {
            await axios.delete(`http://localhost:5000/deleteItem?user_id=${user.displayName + user.id}&rug_name=${rug_name}`);
            fetchUserCollection();
        } catch (err) {
            console.log(err);
        }
    };

    const addUser = async () => {
        const object = {
            user_id: user.displayName + user.id,
            provider: user.provider,
        }
        try {
            await axios.post("http://localhost:5000/users", object);
            fetchUserCollection();
        } catch (err) {
            console.log(err)
        }
    }

    addUser();

    const logoutHandleClick = () => {
        window.open("http://localhost:5000/auth/logout", "_self");
      };

      const name = user ? user.displayName : "Guest";
  return (
    <div>
      Hello, {name}!
      <span onClick={logoutHandleClick}>logout</span>

      <div>
        <h2>Your Rug Collection:</h2>
        <ul>
            {rugNames.map((rug, index) => (
                <li key={index}>
                    {rug.rug_name}
                    <button onClick={() => handleDelete(rug.rug_name)}>Delete</button>
                </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default AccountPage;