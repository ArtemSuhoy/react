import React, { Children } from "react"

const Wrapper = ({ bgColor, width, children, border }) => {
  return (
    <div className={`${width} height-100 ${bgColor} ${border}`}>{children}</div>
  )
}

export default Wrapper
