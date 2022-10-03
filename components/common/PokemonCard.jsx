/* eslint-disable max-len */
import Image from "next/future/image"
import toUpperCase from "utils/upperCaseName"
import generateRandom from "utils/generateRandomColors"

export default function PokemonCard({ pokemons, showModal, colors }) {
  return (
    <div className="flex items-center justify-center sm:flex-none">
      <div className="grid grid-cols-159px h-[277px] gap-x-2  sm:grid-cols-6 sm:gap-x-6 grid-flow-row gap-y-5 ">
        {pokemons?.map((pokemon) => (
          <div
            key={pokemon.id}
            className={`w-32 border-dashed  border-2 border-[#2E3156] cursor-pointer rounded-lg
            grid place-items-center  ${
              pokemon?.types?.length > 1
                ? "bg-gradient-to-b from-[#C0D4C8] to-[#CFB7ED]"
                : ""
            }`}
            style={{
              background: `${
                pokemon.types.length === 1 && generateRandom(colors)
              }`,
            }}
            onClick={() => showModal(pokemon.id, pokemon.name)}
          >
            <div className="h-40 min-h-full w-30 pt-10">
              <Image
                priority
                src={pokemon?.sprites?.other?.dream_world?.front_default}
                alt={pokemon.name}
                width={100}
                height={100}
                className="object-contain h-24 w-24"
              />
            </div>
            <div className="pb-2 flex flex-col items-center">
              <p className="text-[#2E3156] text-md font-semibold leading-6">
                {toUpperCase(pokemon.name)}
              </p>
              <span className="align-center- text-[#2E3156] font-normal text-md">
                00{pokemon.id}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
