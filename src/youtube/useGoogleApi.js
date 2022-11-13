/* eslint-disable */
import { useEffect, useState } from "react";
import $script from 'scriptjs';

const useGoogleApi = () => {
    const [_gapi, setGapi] = useState(null);

    useEffect(() => {
      $script('https://apis.google.com/js/api.js', () => {
        gapi.load('client', () => {
          gapi.client.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
          gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
            .then(() => { 
              console.log("GAPI client loaded for API"); 
            }, (err) => { 
              console.error("Error loading GAPI client for API", err); 
            });
        });

        setGapi(gapi);
      });
    }, []);
  
    return _gapi;
  };
  
  export default useGoogleApi;