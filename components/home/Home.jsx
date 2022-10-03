/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { filteredData, searchPokemon } from "store/pokemonSlice"
import { filterPokemons } from "utils/utils"
import {
  types as initialTypes,
  gender as initialGenderState,
} from "../../utils/types"
import FilterDropdown from "./FilterDropdown"
import SearchBar from "./SearchBar"

export default function Home({
  search,
  setSearch,
  types,
  gender,
  setGender,
  setTypes,
}) {
  const { allPokemons, genderData } = useSelector((state) => state.pokemon)
  const result = filterPokemons(allPokemons, genderData)
  const [activeFilter, setActiveFilter] = useState(false)
  const [filterData, setFilterData] = useState()
  const dispatch = useDispatch()
  const [typesForSmallDevices, setTypesForSmallDevices] = useState(false)
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false)

  useEffect(() => {
    !typesForSmallDevices && setIsFilterDropdownOpen(true)
    typesForSmallDevices && setIsFilterDropdownOpen(false)
  }, [typesForSmallDevices])

  useEffect(() => {
    function handleTypes() {
      if (window.innerWidth < 600) {
        setTypesForSmallDevices(true)
      } else {
        setTypesForSmallDevices(false)
      }
    }
    window.addEventListener("resize", handleTypes)
    return () => handleTypes()
  })

  const handleChange = ({ target: { value } }) => {
    setSearch(value)
    dispatch(searchPokemon(value))
  }

  useEffect(() => {
    // console.log("result", result)
    // dispatch(filteredData(result))
    setFilterData(result)
  }, [allPokemons])

  const handleFilter = () => {
    const filterTypes = (typ) =>
      typ.filter((item) => item.ischecked).map((item) => item.value)
    const typesValues = filterTypes(types)
    const genderValues = filterTypes(gender)
    const updatedData = result?.filter((item) => {
      let val
      if (typesValues.length) {
        val = typesValues.includes(item.type)
      }
      if (genderValues.length) {
        val = genderValues.includes(item.gender)
      }
      if (genderValues.length && typesValues.length) {
        val =
          typesValues.includes(item.type) && genderValues.includes(item.gender)
      }
      return val
    })
    setFilterData(updatedData)
    !typesForSmallDevices && dispatch(filteredData(updatedData))
  }
  const handleDropDownChange = (target, type) => {
    const res = type === "types" ? types : type === "gender" ? gender : ""
    const state = res.map((item) => {
      if (item.value.toLowerCase() === target.value.toLowerCase()) {
        return {
          ...item,
          ischecked: !item.ischecked,
        }
      }
      return item
    })
    type === "types" && setTypes(state)
    setActiveFilter(true)
    type === "gender" && setGender(state)
    setActiveFilter(true)
  }

  useEffect(() => {
    activeFilter && handleFilter()
  }, [types, gender])

  const handleFilterDropdown = () => {
    setIsFilterDropdownOpen((prev) => !prev)
  }

  const resetFilter = () => {
    setTypes(initialTypes)
    setGender(initialGenderState)
    dispatch(filteredData(filterData))
    setIsFilterDropdownOpen(false)
  }

  const applyFilter = () => {
    dispatch(filteredData(filterData))
    setIsFilterDropdownOpen(false)
  }

  return (
    <section>
      <div className="grid grid-cols-1 pl-[28px] sm:grid-cols-2">
        <SearchBar
          handleChange={handleChange}
          search={search}
          handleFilterDropdown={handleFilterDropdown}
        />
        {isFilterDropdownOpen && (
          <FilterDropdown
            handleFilterDropdown={handleFilterDropdown}
            gender={gender}
            typesForSmallDevices={typesForSmallDevices}
            handleDropDownChange={handleDropDownChange}
            types={types}
            resetFilter={resetFilter}
            applyFilter={applyFilter}
          />
        )}
      </div>
    </section>
  )
}
