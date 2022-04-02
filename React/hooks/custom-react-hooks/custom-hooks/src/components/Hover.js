import React, {useRef} from "react";
import useHover from "../hooks/useHover";

const Hover = () => {
  const ref = useRef();
  const isHovering = useHover(ref)

  return (
    <div ref={ref} style={{width: 300, height: 300, background: isHovering ? 'red' : 'green', transition: 'background .3s ease'}}>

    </div>
  )
}

export default Hover