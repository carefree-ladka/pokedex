/* eslint-disable indent */
/* eslint-disable max-len */
import Image from "next/future/image"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import generateRandom from "utils/generateRandomColors"
import toUpperCase from "utils/upperCaseName"
import {
  convertHeight,
  descriptionList,
  flattenList,
  simplifyLabels,
} from "utils/utils"
import gradientColors from "../../utils/constants"

export default function PokemonPreview({ close }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [LowerDevice, setLowerDevices] = useState(false)
  const { selectedPokemon, gender, disables, description, loading } =
    useSelector((state) => state.pokemon)

  useEffect(() => {
    function handleText() {
      if (window.innerWidth < 600) {
        setLowerDevices(true)
      } else {
        setLowerDevices(false)
      }
    }
    window.addEventListener("resize", handleText)
    return () => handleText()
  }, [])

  if (loading) {
    return <p>loading...</p>
  }

  const abilities = (data = []) =>
    data.map((item) => toUpperCase(item.ability.name))

  const handleReadMore = () => setIsModalOpen((prev) => !prev)

  return (
    <section className="p-6 text-[#2E3156] w-[390px] sm:w-[756px]">
      <div className="relative mb-10  lg:max-w-full lg:flex sm:grid sm:grid-cols-2">
        <div
          className={`hidden sm:block mt-2  grid place-items-center h-[221.32px] w-[159px] sm:h-[277px] sm:w-[199px] p-5  mr-8 flex-none bg-cover rounded text-center overflow-hidden border-dashed  border-2 border-[#2E3156] 
         ${
           selectedPokemon?.types?.length > 1
             ? "bg-gradient-to-b from-[#C0D4C8] to-[#CFB7ED]"
             : ""
         }`}
          style={{
            background: `${
              selectedPokemon?.types?.length === 1 &&
              generateRandom(gradientColors)
            }`,
          }}
        >
          <div className="flex items-center justify-center h-full">
            <Image
              src={selectedPokemon?.sprites?.other?.dream_world?.front_default}
              width={100}
              height={100}
              alt={selectedPokemon.name}
              className="h-[221.32px] w-[159px] sm:h-[277px] sm:w-[199px]"
            />
          </div>
        </div>
        <div className=" bg-white rounded-b lg:rounded-b-none lg:rounded-r  flex flex-col justify-between leading-normal">
          <div className="">
            <div className="">
              <div className="flex items-center justify-between">
                <div className="mt-10 sm:mt-0 sm:mb-0 mb-6 sm:flex sm:items-center sm:justify-center sm:flex-row items-center justify-center sm:grid-cols-2 sm:place-items-center sm:gap-x-10 ">
                  <h2 className="text-[#2E3156] leading-[35px] tracking-[1px] text-[30px] font-[800]">
                    {selectedPokemon?.name?.toUpperCase()}
                  </h2>
                  <div className="sm:px-8 text-[#2E3156] text-[30px] leading-[35px] font-[400] sm:border-l-2 sm:border-r-2">
                    00{selectedPokemon.id}
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    type="button"
                    onClick={close}
                    className="absolute leading-[35px] top-11 sm:top-1"
                    aria-label="close button"
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
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-8">
            <div
              className={`sm:hidden mt-2 flex items-center justify-center h-[221.32px] w-[159px] sm:h-[277px] sm:w-[199px] p-5  mr-8 flex-none bg-cover rounded text-center overflow-hidden border-dashed  border-2 border-[#2E3156] 
         ${
           selectedPokemon?.types?.length > 1
             ? "bg-gradient-to-b from-[#C0D4C8] to-[#CFB7ED]"
             : ""
         }`}
              style={{
                background: `${
                  selectedPokemon?.types?.length === 1 &&
                  generateRandom(gradientColors)
                }`,
              }}
            >
              <Image
                src={
                  selectedPokemon?.sprites?.other?.dream_world?.front_default
                }
                width={100}
                height={100}
                alt={selectedPokemon.name}
                className="h-[221.32px] w-[159px] sm:h-[277px] sm:w-[199px]"
              />
            </div>
            <div className="font-normal text-[18px] sm:font-normal sm:leading-[25px] w-[150px] h-[229px] sm:w-[433px] sm:h-[200px]">
              {LowerDevice
                ? descriptionList(description?.flavor_text_entries).substring(
                    0,
                    120
                  )
                : descriptionList(description?.flavor_text_entries).substring(
                    0,
                    400
                  )}
              ...
              <span
                className="font-bold underline cursor-pointer"
                role="button"
                tabIndex={0}
                onClick={handleReadMore}
              >
                read more
              </span>
              {isModalOpen && (
                <div className="absolute w-[329px]  sm:w-[675px] p-4 pt-8  rounded left-0 mt-4 z-50 text-[#fff] bg-[#2E3156] text-[14px] leading-5 ">
                  <button
                    type="button"
                    onClick={handleReadMore}
                    className="absolute top-2  right-2"
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <p>{descriptionList(description?.flavor_text_entries)}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="text-[16px] mt-5 grid grid-cols-2 pb-4 gap-y-8 sm:grid-cols-4">
        <div>
          <h3 className="font-bold pb-2  leading-[25px]">Height</h3>
          <p>{convertHeight(selectedPokemon.height)}</p>
        </div>
        <div>
          <h3 className="font-bold pb-2 text-[16px] leading-[25px]">Weight</h3>
          <p>{selectedPokemon.weight / 10} kg</p>
        </div>
        <div>
          <h3 className="font-bold pb-2 text-[16px] leading-[25px]">Gender</h3>
          <p>{gender?.gender?.join(", ")}</p>
        </div>
        <div>
          <h3 className="font-bold pb-2 text-[16px] leading-[25px]">
            Egg Groups
          </h3>
          {flattenList(description?.egg_groups).join(", ")}
        </div>
      </div>
      <div className="mt-5 mb-12 grid grid-cols-2 gap-y-8 sm:grid-cols-4">
        <div>
          <h3 className="font-bold text-[16px] pb-2 leading-[25px]">
            Abilities
          </h3>
          <p className="text-sm">
            {abilities(selectedPokemon.abilities).join(", ")}
          </p>
        </div>
        <div>
          <h3 className="font-bold text-[16px] pb-2 leading-[25px]">Types</h3>
          <p>
            {selectedPokemon?.types?.map(({ type }) => (
              <span
                key={type}
                className="w-[28px] h-[25px] text-[16px] font-normal p-[2px] rounded mx-[2px] border"
                style={{
                  background: generateRandom(),
                }}
              >
                {toUpperCase(type.name)}
              </span>
            ))}
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-[16px] pb-2 leading-[25px]">
            Weak Against
          </h3>
          <p>
            {disables?.damage_relations?.double_damage_from.map(({ name }) => (
              <span
                key={name}
                className="w-[28px] h-[25px] text-[16px] font-normal text-sm p-[2px] rounded mx-[2px] border"
                style={{
                  background: generateRandom(),
                }}
              >
                {toUpperCase(name)}
              </span>
            ))}
          </p>
        </div>
      </div>
      <div className="mt-3 bg-[#B0D2D2] rounded pb-4 pt-4 pl-6 sm:pl-2 ">
        <div className="font-bold mb-4">
          <h2 className="text-[20px] leading-[25px]">Stats</h2>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 ">
          {selectedPokemon?.stats?.map((item) => (
            <div key={item.idx} className="flex items-center justify-between">
              <label htmlFor="stat" className="text-sm w-[73px]">
                {toUpperCase(simplifyLabels(item.stat.name))}
              </label>
              <div className="relative w-[214px]">
                <span className="absolute w-[46px] font-bold left-1 top-[0px] text-[10px] text-[#fff]">
                  {item.base_stat}
                </span>
                <progress id="stat" value={item.base_stat} max="100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
