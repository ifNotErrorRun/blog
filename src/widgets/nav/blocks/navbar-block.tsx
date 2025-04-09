import NavLinks from "../interactions/nav-links.tsx";
import SearchBar from "../interactions/search-bar.tsx";

export default function NavBarBlock() {
  return (
    <nav className="bg-white shadow-sm">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex space-x-8">
            <NavLinks />
          </div>
          <div className="flex items-center">
            <SearchBar />
          </div>
        </div>
      </nav>
    </nav>
  );
}
