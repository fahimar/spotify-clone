import React, { useEffect } from "react";
import Login from "./components/Login";

import { reducerCases } from "./utils/Constants";
import Spotify from "./components/Spotify";
import { useStateProvider } from "./utils/StateProvider";
//rfc
export default function App() {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    // console.log(hash);
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      // console.log(token);
      if (token) {
        dispatch({ type: reducerCases.SET_TOKEN, token });
      }
    }
    document.title = "Spotify";
  }, [token, dispatch]);
  return <div>{token ? <Spotify /> : <Login />}</div>;
}
// import React, { useEffect } from "react";
// import Login from "./components/Login";
// import { useStateProvider } from "./utils/StateProvider";
// import { reducerCases } from "./utils/Constants";
// import Spotify from "./components/Spotify";

// export default function App() {
//   const [{ token }, dispatch] = useStateProvider();

//   useEffect(() => {
//     const hash = window.location.hash;

//     if (hash) {
//       const newToken = hash.substring(1).split("&")[0].split("=")[1];
//       dispatch({ type: reducerCases.SET_TOKEN, token: newToken });
//     }
//   }, [token, dispatch]);

//   return <div>{token ? <Spotify /> : <Login />}</div>;
// }
