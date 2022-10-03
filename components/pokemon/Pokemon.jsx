/* eslint-disable indent */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  fetchAllPokemons,
  fetchDescription,
  fetchDisabilities,
  fetchGender,
  fetchGenderData,
  selectedPokemon,
  selector,
} from "store/pokemonSlice"
import Modal from "../modal/Modal"
import PokemonPreview from "./PokemonPreview"
import PokemonCard from "./PokemonCard"
import gradientColors from "../../utils/constants"

export default function Pokemon({ search }) {
  const [colors] = useState(gradientColors)
  const modalRef = useRef(null)
  const dispatch = useDispatch()

  const allPokemons = useSelector(selector)
  const { searchedPokemons, filterData } = useSelector((state) => state.pokemon)

  useEffect(() => {
    dispatch(fetchAllPokemons())
    dispatch(fetchGenderData())
  }, [])

  const showPokemonModal = (id, name = "bulbasaur") => {
    dispatch(fetchGender(name))
    dispatch(fetchDisabilities(id))
    dispatch(fetchDescription(id))
    dispatch(selectedPokemon(id))
    modalRef.current.showModal()
  }

  const closePokemonPreviewModal = () => modalRef.current.close()

  const renderData =
    search.length > 0
      ? searchedPokemons
      : filterData.length
      ? filterData
      : allPokemons

  return (
    <section className="mt-8 ">
      <Modal ref={modalRef}>
        <PokemonPreview close={closePokemonPreviewModal} />
      </Modal>
      <PokemonCard
        pokemons={renderData}
        showModal={showPokemonModal}
        colors={colors}
      />
    </section>
  )
}
