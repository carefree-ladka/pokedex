/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React from "react"

export default function SearchBar({
  handleChange,
  search,
  handleFilterDropdown,
}) {
  return (
    <form className="sm:pl-[92px]">
      <div className="relative grid grid-cols-2 sm:grid-cols-1 mb-8">
        <div>
          <label
            htmlFor="search"
            className="pb-1 block text-[16px] text-unkown sm:leading-5 "
          >
            Search by
          </label>
          <input
            type="search"
            id="search"
            name="search"
            value={search}
            placeholder="Name or Number"
            onChange={handleChange}
            className="bg-inputBg rounded-lg pl-[13px]  w-[239px] sm:w-[563px] h-[57px] border-none placeholder:sm:text-[#5D5F7E] placeholder:sm:opacity-50"
          />
          <span className="hidden sm:block absolute top-9 -right-4 w-[15.07px] h-[27.31px] text-[#5D5F7E]">
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
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>
        </div>
        <div className="block absolute right-[25px] top-[20px] sm:hidden ">
          <button
            type="button"
            className="flex items-center justify-center w-[76.67px] h-[57.5px] bg-[#2E3156] rounded-lg text-[#fff]"
            onClick={handleFilterDropdown}
            aria-label="filter button"
          >
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
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
  )
}
