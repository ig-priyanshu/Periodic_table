import { blockColors } from '../assets/BlockColors';

export default function BlockLegend() {
  return (
    <div style={{ display: 'flex', gap: 20, margin: '1rem 0' }}>
      {Object.entries(blockColors).map(([block, color]) => (
        <div key={block} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{
            display: 'inline-block',
            width: 20,
            height: 20,
            backgroundColor: color,
            border: '1px solid #000',
            borderRadius: 4,
            marginRight: 6
          }}></span>
          <span style={{ fontSize: '1em' }}>{block}-block</span>
        </div>
      ))}
    </div>
  );
}
