import { useState } from "react";

//custom toggle hook

export default function useToggle(initial = false) {
    //declare piece of state 
    const [state, setState] = useState(initial);
    const toggle = () => {
        setState(!state);
    }

    return [state, toggle]
}