import {useLocation, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

const RedirectPage=()=>{
    const location = useLocation();

    // Use useEffect hook to run code when the component mounts
    useEffect(() => {
        // Parse the query string from the location object
        const queryParams = new URLSearchParams(location.search);

        // Get the value of the 'c' parameter from the query string
        const code = queryParams.get('code');

        // Log the value of 'c' parameter
        console.log("Value of 'c':", code);
    }, [location.search]);
    return <>
        LOADING....
    </>
}


export default RedirectPage;