import {useContext} from "react";
import DarkModeContext from "./dark_mode_context";

export default function useDarkMode() {
    return useContext(DarkModeContext);
}

