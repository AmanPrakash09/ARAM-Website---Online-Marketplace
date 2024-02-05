import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginForm from "./pages/LoginForm";
import AccountPage from "./pages/AccountPage";
import NavigationBar from "./components/NavigationBar";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  // const user = false;

  const [user,setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      fetch("http://marketplace.a-ramcreatives.com/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Credentials": true,
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

  return (
  <div>
      {/* <NavigationBar user={user}/> */}
      <Routes>
        <Route path="/" element={<MainPage user={user} />} />
        <Route path="/login" element={ user ? <AccountPage user={user} />: <LoginForm />} />
        <Route path="/account" element={ user ? <AccountPage user={user} />: <LoginForm />} />
      </Routes>
    </div>
  );
}
export default App;


// function App() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getUser = async () => {
//       try {
//         console.log("A");
  
//         const response = await fetch("http://marketplace.a-ramcreatives.com/auth/login/success", {
//           method: "GET",
//           credentials: "include",
//           headers: {
//             Accept: "application/json",
//           },
//         });
  
//         console.log("B");
  
//         if (response.status === 200) {
//           const resObject = await response.json();
//           console.log("C");
//           console.log("Response:", resObject);
  
//           setUser(resObject.user);
//         } else {
//           throw new Error("Authentication Failed!");
//         }
//       } catch (err) {
//         console.log(err);
//       } finally {
//         setLoading(false);  // Set loading to false regardless of success or failure
//       }
//     };
  
//     getUser();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>; // You can replace this with a loading spinner or any other loading indicator
//   }

//   return (
//     <div>
//       {/* Your actual content goes here */}
//       <Routes>
//         <Route path="/" element={<MainPage user={user} />} />
//         <Route path="/login" element={user ? <AccountPage user={user} /> : <LoginForm />} />
//         <Route path="/account" element={user ? <AccountPage user={user} /> : <LoginForm />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
