export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="search-bar"
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search by name, symbol, or number..."
      style={{
        padding: "8px 12px",
        marginBottom: "16px",
        borderRadius: "5px",
        border: "1px solid #bbb",
        width: "100%",
        maxWidth: "320px",
        fontSize: "1em"
      }}
    />
  );
}
