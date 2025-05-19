import ElementCell from './ElementCell';
import './PeriodicTable.css';

export default function PeriodicTable({ elements = [], onElementClick, searchTerm,currentFilter, filterOptions }) {
  return (
    <div className="periodic-table-grid">
      {elements.map(el => (
        <div
          key={el.number}
          style={{
            gridColumn: el.xpos,
            gridRow: el.ypos,
          }}
        >
          <ElementCell
            element={el}
            currentFilter={currentFilter}
            searchTerm={searchTerm}
            filterOptions={filterOptions}
            onClick={() => onElementClick(el)}
          />
        </div>
      ))}
    </div>
  );
}
