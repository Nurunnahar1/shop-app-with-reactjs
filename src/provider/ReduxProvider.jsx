import { useEffect, useReducer } from "react";
import ReduxContext from "../context/ReduxContext";
import axios from "axios";
import reduxReducer from "../redux/reduxReducer";
import initialState from "../redux/initialState";

const ReduxProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reduxReducer, initialState);

  const LoadAllBrands = async () => {
    const response = await axios.get("http://localhost:5050/brands");
    dispatch({
      type: "BRAND_DATA_LOAD",
      payload: response.data
    });
    // console.log(response.data);
  };

  useEffect(() => {
    LoadAllBrands();
  }, []);


  return (
    <ReduxContext.Provider value={{ store, dispatch }}>
      {children}
    </ReduxContext.Provider>
  );
};

export default ReduxProvider;
