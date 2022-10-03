/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
import React, { forwardRef } from "react"
// import Image from "next/future/image"
// import Divider from "../common/Divider"

export default forwardRef((props, ref) => {
  return (
    <section className="relative">
      <dialog
        {...props}
        ref={ref}
        className="scrollbar-hide bg-[#deeded] absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%] w-[317] h-screen drop-shadow-newXl rounded "
      >
        {props.children}
      </dialog>
    </section>
  )
})
