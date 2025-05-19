import { getElementBackgroundColor } from "../utils/ElementColor";
import './ElementCell.css';

export default function ElementCell({ 
  element, 
  onClick, 
  searchTerm = "", 
  currentFilter, 
  filterOptions 
}) {
  const backgroundColor = getElementBackgroundColor(element, currentFilter, filterOptions);
  
  const isMatch =
    searchTerm &&
    (
      element.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      element.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      element.number.toString().includes(searchTerm)
    );

  const className = [
    "element-cell",
    isMatch ? "search-match" : "",
    searchTerm && !isMatch ? "search-dim" : ""
  ].join(" ");

  return (
    <div
      className={className}
      onClick={onClick}
      style={{ backgroundColor }}  // Only dynamic style remains
    >
      <div className="element-symbol">{element.symbol}</div>
      <div className="element-number">{element.number}</div>
    </div>
  );
}
