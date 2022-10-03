/* eslint-disable max-len */
import React, { useState } from "react"
import toUpperCase from "../../utils/upperCaseName"

export default function Select({
  placeholder,
  options,
  handleChange,
  typesForSmallDevices,
}) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)

  return (
    <div className="w-[194px] text-unkown pb-4 sm:border-none  ">
      <div className="w-[295px] rounded-lg border border-[#2E3156] sm:border-none ">
        <div onClick={() => setIsDropDownOpen((prev) => !prev)}>
          <h3 className="pb-1 hidden sm:block text-[16px] sm:font-normal sm:leading-5">
            {placeholder}
          </h3>
          <div
            className="sm:w-[194px] sm:h-[57px]  sm:border-none w-[295px] h-[49px] sm:bg-inputBg rounded-lg flex items-center p-4  bg-white cursor-pointer"
            role="menubar"
            tabIndex={0}
            style={{
              border: `${isDropDownOpen ? "none" : "border-[#2E3156]"}`,
            }}
          >
            <h3 className="pb-1 min-w-[59px] h-[21px] font-extrabold leading-[21.09px] text-[18px] sm:hidden">
              {placeholder}
            </h3>
            <hr className="sm:hidden w-[31px] -rotate-90 opacity-[0.15] pr-6" />
            <div className="flex items-center ">
              <div className="w-[194px] h-[16px] text-[14px] ">
                <span className="">
                  <span className="sm:hidden">(</span>
                  {toUpperCase(options[0].value)}
                </span>
                <span className="font-bold text-[#2E3156] pl-2 sm:pl-[1px]">
                  + {options.length - 1} More
                </span>
                <span className="sm:hidden">)</span>
              </div>

              <div className="relative ">
                <span className="hidden sm:block absolute right-11 -top-3 w-[8px] h-[4px]">
                  {!isDropDownOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  )}
                </span>

                <span className="sm:hidden absolute w-[24px] h-[24px] right-6 -top-3">
                  {!isDropDownOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                </span>
              </div>
            </div>
          </div>
          {isDropDownOpen && <hr className=" sm:hidden w-[249px] mx-auto" />}
        </div>
        {isDropDownOpen && (
          <div className="w-[295px] sm:w-[194px] sm:bg-inputBg mt-2 font-normal bg-white p-4 rounded-lg">
            <div
              className={`pb-2 ${
                placeholder === "Type" && typesForSmallDevices
                  ? "grid grid-cols-2 gap-2"
                  : ""
              }`}
              role="listbox"
              aria-labelledby="options"
            >
              {options.map((selected) => (
                <div
                  role="option"
                  aria-selected
                  aria-labelledby="custom-dropdown"
                  aria-label="submenu"
                  key={selected.id}
                  className="pb-2"
                >
                  <input
                    id={selected.id}
                    onChange={(event) =>
                      handleChange(event.target, selected.type)
                    }
                    type="checkbox"
                    checked={selected.ischecked}
                    value={selected.value}
                    className="accent-[#2E3156] scale-125"
                  />
                  <label
                    htmlFor={selected.id}
                    className="pl-2 text-[#2E3156] text-sm font-normal"
                  >
                    {toUpperCase(selected.value)}
                  </label>
                  <hr className="hidden sm:bg-[#2E315633] sm:mt-2 sm:block" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
