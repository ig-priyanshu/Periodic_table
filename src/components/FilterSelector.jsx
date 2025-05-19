import { useState } from 'react';

const filterOptions = [
  { value: 'block', label: 'Electron Block' },
  { value: 'melt', label: 'Melting Point' },
  { value: 'boil', label: 'Boiling Point' },
  { value: 'atomic_mass', label: 'Atomic Mass' },
  {value:'density', label:'Density'},
 { value: 'electronegativity_pauling', label: 'Electronegativity' },
  { value: 'electron_affinity', label: 'Electron Affinity' }
];

export default function FilterSelector({ onFilterChange }) {
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleFilterChange = (e) => {
    const filterType = e.target.value;
    setSelectedFilter(filterType);
    onFilterChange(filterType);
  };

  return (
    <div className="filter-selector">
      <select value={selectedFilter} onChange={handleFilterChange} className="filter-dropdown">
        <option value="">Select Filter</option>
        {filterOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
