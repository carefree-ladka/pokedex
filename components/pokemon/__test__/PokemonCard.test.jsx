/* eslint-disable no-undef */
import "@testing-library/jest-dom/extend-expect"
import { renderWithProvider } from "../../../utils/testWrapper"
import PokemonCard from "../PokemonCard"

describe("PokemonCard renders", () => {
  test("pokemon names present on screen", async () => {
    const { findByTestId } = renderWithProvider(<PokemonCard />)
    const pokemon = { name: "Bulbasaur", id: 1 }
    expect(findByTestId("name")).toBeInTheDocument()
  })
})
