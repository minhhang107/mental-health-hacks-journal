import { fireStoreApi } from "api/firestore-api";
import * as React from "react";
import { useHistory } from "react-router-dom";
const AuthContext = React.createContext();
export function AuthProvider(props) {
  const [token, setToken] = React.useState(null);
  const [error, setError] = React.useState(null);
  const history = useHistory();

  const login = (loginCreds) => {
    fireStoreApi
      .post("/users/login", loginCreds)
      .then((res) => {
        setError(null);
        setToken(res.data.token);
        history.push("/");
      })
      .catch((err) => {
        setToken(null);
        setError(err.response?.data.error);
      });
  };

  const register = (signUpInfo) => {
    fireStoreApi
      .post("/users/signup", signUpInfo)
      .then((res) => setToken(res.data.token))
      .catch(() => setToken(null));
  };

  const logout = () => {}; // clear the token in localStorage and the user data
  // note, I'm not bothering to optimize this `value` with React.useMemo here
  // because this is the top-most component rendered in our app and it will very
  // rarely re-render/cause a performance problem.
  return (
    <AuthContext.Provider
      value={{ token, error, login, logout, register }}
      {...props}
    />
  );
}
export const useAuth = () => React.useContext(AuthContext);
