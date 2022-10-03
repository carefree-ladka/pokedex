import Head from "next/head"
import { useState } from "react"
import dynamic from "next/dynamic"
import { types as filterTypes, gender as filterGenders } from "../utils/types"
import SuspenseLayout from "@/components/common/SuspenseLayout"

const Home = dynamic(() => import("@/components/home/Home"), {
  suspense: true,
})
const Pokemon = dynamic(() => import("@/components/common/Pokemon"), {
  suspense: true,
})

export default function IndexPage() {
  const [search, setSearch] = useState("")
  const [types, setTypes] = useState(filterTypes)
  const [gender, setGender] = useState(filterGenders)

  return (
    <div className="mt-5">
      <Head>
        <title>Pokédex</title>
        <meta name="description" content="Pokemons" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <SuspenseLayout>
          <Home
            search={search}
            setSearch={setSearch}
            types={types}
            setTypes={setTypes}
            gender={gender}
            setGender={setGender}
          />
          <Pokemon search={search} />
        </SuspenseLayout>
      </div>
    </div>
  )
}
