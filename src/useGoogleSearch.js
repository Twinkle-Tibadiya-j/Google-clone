// import React, { useState, useEffect } from "react";
// import API_KEYS from "./Keys";

// const CONTEXT_KEY = "c401dd2f602164088";

// const useGoogleSearch = (term) => {
//     const [data, setData] = useState(null);


//    useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEYS}&cx=${CONTEXT_KEY}&q=${term}`);
//             const result = await response.json();
//             console.log(result);
//             setData(result);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     };
//     if (term) fetchData();
// }, [term]);
 
//     return {data};
// }

// export default useGoogleSearch;

import React, { useState, useEffect } from "react";
import API_KEYS from "./Keys";

const CONTEXT_KEY = "4085d721c975f464d";

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/customsearch/v1?key=${API_KEYS}&cx=${CONTEXT_KEY}&q=${term}`
                );
                const result = await response.json();
                console.log("Google API result:", result); // Log the full response
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        if (term) fetchData();
    }, [term]);

    return { data };
};

export default useGoogleSearch;
