import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "../context";
import { publicRoutes, privateRoutes } from "../router/routes";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
  const {isAuth, setIsAuth, isLoading} = useContext(AuthContext)  
  
  if(isLoading){
    return <Loader/>
  }

  return (
    isAuth
      ?
    <Routes>
      {
        privateRoutes.map(route => {
          return (
            <Route
              element={route.component}
              key={route.path}
              exact={route.exact}
              path={route.path}
            />
          )
        })  
      }
    </Routes>
      :
    <Routes>
      {
        publicRoutes.map((route, index) => {
          return (
            <Route
              element={route.component}
              key={route.path}
              exact={route.exact}
              path={route.path}
            />
          )
        })  
      }
    </Routes>
  )
} 

export default AppRouter