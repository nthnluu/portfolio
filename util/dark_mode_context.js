import {createContext} from "react";

const DarkModeContext = createContext([false, () => null]);

export default DarkModeContext;