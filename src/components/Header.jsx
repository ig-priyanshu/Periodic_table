import './Header.css';
import ThemeToggleButton from './ThemeToggleButton.jsx'; // Added import

export default function Header({ searchBar }) {
  return (
    <header className="app-header">
      <div className="header-row">
        <div className="header-left">
          <h1 className="app-title">Periodic Table Explorer</h1>
          <p className="app-subtitle">Discover the elements interactively</p>
        </div>
        <div className="header-right">
          {searchBar}
          <ThemeToggleButton /> {/* Added button */}
        </div>
      </div>
    </header>
  );
}
