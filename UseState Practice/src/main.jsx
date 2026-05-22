import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ToggleButton from './Toggle.jsx'
import InputField from "./InputField.jsx";
import ShowText from "./ShowText.jsx";
import TextLength from "./TextLength.jsx";
import UserForm from "./MultipleInputs.jsx";
import SkillsForm from "./SkillsForm.jsx";
import LocationSelector from "./DependentDropDown.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ToggleButton/> */}
    {/* <InputField/>  */}
    {/* {<ShowText/>} */}
    {/* {<TextLength/>} */}
    {/* {<UserForm/>} */}
    {/* {<SkillsForm/>} */}
  {<LocationSelector/>}
      </StrictMode>,
)
