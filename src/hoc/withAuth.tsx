import React, { useEffect } from "react";
import { storage } from "../utility/asyncStorage";
import { AUTH_TOKEN_KEY, MY_TOKEN_SECRET } from "../utility/constants";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../constants/constant";
import { decode } from "react-native-pure-jwt";

// Define the type for the WrappedComponent's props
type WithAuthProps = {

};

// The HOC function
const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {

  const navigation = useNavigation();
  let token : string|null = null ;
 
  useEffect(()=>{
    const getToken = async()=>{
      token = await storage.getItem(AUTH_TOKEN_KEY)
    }
    getToken()
  },[])

  // Return a new component
  return  (props: P & WithAuthProps) => {
    const { ...restProps } = props;

    useEffect(() => {
      if(token){
        decode(
          token, 
          MY_TOKEN_SECRET, 
          {
            skipValidation: true
          }
        )
        .then((object)=>{
          // {"headers": {"alg": "HS256", "typ": "JWT"}, "payload": {"additional": "payload", "exp": 1724858039, "iss": "arvind@gmail.com"}}

    
          const tokenExpiry= object?.payload?.exp;
          const currentTime = Date.now()/1000 // time till seconds

         const isTokenValid= tokenExpiry > currentTime

          if (!isTokenValid) {
             console.log("Token expired , Navigate to login ")
            
             // reset the navigation and moved to login screen
             navigation.reset({
              index: 0, 
              routes: [{ name: Routes.Login }],
            })
          }
        })
        .catch(console.error);
      }
      
    }, [token]);
  
    return <WrappedComponent {...(restProps as P)} />
  };
};

export default withAuth;
