import { useState, useMemo } from "react";
import elementsData from "./data/ElementalData.json";
import PeriodicTable from "./components/PeriodicTable";
import SearchBar from "./components/SearchBar";
import ElementModal from "./components/ElementModal";
import FilterSelector from "./components/FilterSelector";
import BlockLegend from "./components/BlockLegend";
import { getFilterOptions } from "./utils/FilterOptions";
import Header from "./components/Header";
import './App.css';

export default function App() {
  const elements = elementsData.elements;

  const [currentFilter, setCurrentFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedElement, setSelectedElement] = useState(null);

  const filterOptions = useMemo(
    () => getFilterOptions(elements, ['melt', 'boil', 'atomic_mass', 'density','electron_affinity', 'electronegativity_pauling']),
    [elements]
  );

  const filteredElements = elements

  return (
    <div className="main-content">
      <Header
  searchBar={
    <SearchBar
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
    />
  }
/>
      <div className="periodic-table-area">
        <FilterSelector onFilterChange={setCurrentFilter} />
        {currentFilter === 'block' && <BlockLegend />}
        <PeriodicTable
          elements={filteredElements}  // Don't forget to pass elements prop
          onElementClick={setSelectedElement}
        searchTerm={searchTerm}
        currentFilter={currentFilter}
        filterOptions={filterOptions}
        />
      </div>
      <ElementModal
        element={selectedElement}
        
        onClose={() => setSelectedElement(null)}
      />
    </div>
  );
}
