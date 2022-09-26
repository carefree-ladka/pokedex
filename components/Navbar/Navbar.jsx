export default function Navbar() {
  return (
    <header className="relative">
      <nav>
        <h1 className="text-2xl font-semibold text-[#2E3156] inline-block">
          Pokédex
        </h1>
        <span className="after:inline-block after:absolute after:content-[] after:w-1 after:h-2 after:bg-[#5D5F7E]" />
        <span className="text-[20px] text-[#5D5F7E] font-[500] leading-6">
          Search for any Pokémon that exists on the planet
        </span>
      </nav>
    </header>
  );
}
