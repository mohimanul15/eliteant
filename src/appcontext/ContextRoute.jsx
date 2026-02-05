import { useState } from "react";
import { AppContext } from "./AppContext";

const ContextRoute = ({ children }) => {

    const [darkMode, setDarkMode] = useState(false);


    const data = {
        darkMode,
        setDarkMode
    };

    return <AppContext.Provider value={data}>
        {
            children
        }
    </AppContext.Provider>
};

export default ContextRoute;