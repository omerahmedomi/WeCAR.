import "@theme-toggles/react/css/Expand.css";
import useTheme from "../hooks/useTheme";
import {Expand} from '@theme-toggles/react'
const ToggleSwitch = () => {
  const { theme, toggleTheme } = useTheme();
 return(
  <Expand toggled={theme =='dark'&& true} toggle={toggleTheme}/>
 )
};



export default ToggleSwitch;
