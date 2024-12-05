import { useEffect, useReducer } from "react";
import ReduxContext from "../context/ReduxContext";
import axios from "axios";
import reduxReducer from "../redux/reduxReducer";
import initialState from "../redux/initialState";

const ReduxProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reduxReducer, initialState);

  //brand data load
  const LoadAllBrands = async () => {
    const response = await axios.get("http://localhost:5050/brands");
    dispatch({
      type: "BRAND_DATA_LOAD",
      payload: response.data,
    });
    // console.log(response.data);
  };

  //tag data load
  const LoadAllTags = async () => {
    const response = await axios.get("http://localhost:5050/tags");
    dispatch({
      type: "TAG_DATA_LOAD",
      payload: response.data,
    });

 
  };

  useEffect(() => {
    LoadAllBrands();
    LoadAllTags();
  }, []);

  return (
    <ReduxContext.Provider value={{ store, dispatch }}>
      {children}
    </ReduxContext.Provider>
  );
};

export default ReduxProvider;
