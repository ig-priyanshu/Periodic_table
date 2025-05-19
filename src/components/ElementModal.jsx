
import './ElementModal.css';
export default function ElementModal({ element, onClose }) {
  if (!element) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={e => e.stopPropagation()}
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">&times;</button>
        <h2>{element.name} ({element.symbol})</h2>
        <p><strong>Atomic Number:</strong> {element.number}</p>
        <p><strong>Category:</strong> {element.category}</p>
        <p><strong>Atomic Mass:</strong> {element.atomic_mass}</p>
        <p><strong>Phase:</strong> {element.phase}</p>
        <p><strong>Summary:</strong> {element.summary}</p>
      </div>
    </div>
  );
}
