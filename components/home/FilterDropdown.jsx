/* eslint-disable max-len */
import React from "react"
import GenderFilter from "../dropdowns/GenderFilter"
import TypeFilter from "../dropdowns/TypeFilter"

export default function FilterDropdown({
  handleFilterDropdown,
  gender,
  typesForSmallDevices,
  handleDropDownChange,
  types,
  resetFilter,
  applyFilter,
}) {
  return (
    <div className=" relative -top-60 -left-[0.111px] sm:top-0 sm:left-0  w-[337px]  h-[753px] sm:h-0 bg-[#fff] rounded-lg sm:bg-[#deeded]">
      <div className=" px-5 pt-6">
        <div className=" sm:hidden flex items-center justify-between">
          <h2 className="mb-2 w-[72px] h-[29px] text-[#2E3156] font-extrabold text-[25px] leading-7">
            Filters
          </h2>
          <button type="button" className="pr-2" onClick={handleFilterDropdown}>
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
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <hr className="sm:hidden mb-5 w-[295px] bg-[#2E315626] border border-[#2E315626]" />
        <div className="sm:relative sm:-top-6 sm:pl-12 sm:grid sm:grid-cols-2 sm:gap-x-40">
          <div className="">
            <TypeFilter
              options={!typesForSmallDevices ? types.slice(0, 6) : types}
              handleChange={handleDropDownChange}
              typesForSmallDevices={typesForSmallDevices}
            />
          </div>
          <div className="">
            <GenderFilter
              options={gender}
              handleChange={handleDropDownChange}
            />
          </div>
        </div>
      </div>
      <div className="sm:hidden sticky top-[91%] z-999 w-[336px] h-[67px] rounded-lg  shadow-footer">
        <div className=" flex items-center justify-evenly pt-3 text-[14px] leading-[16.41px]">
          <div>
            <button
              type="button"
              className="w-[138.61px] h-[37px] rounded-lg border border-[ #2E3156] "
              onClick={resetFilter}
            >
              Reset
            </button>
          </div>
          <div>
            <button
              type="button"
              className="w-[138.61px] h-[37px] rounded-lg bg-[#2E3156] text-[#fff]"
              onClick={applyFilter}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
