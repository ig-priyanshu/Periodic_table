import { blockColors } from "../assets/BlockColors";
export function getElementBackgroundColor(element, filter, options) {
  if (!filter) return undefined;

  // Block coloring (for block filter)
  if (filter === "block") {
    return blockColors[element.block] || undefined;
  }

  // Numeric filters: smooth gradient
  const numericFilters = [
    'melt', 'boil', 'atomic_mass', 'density', 'electron_affinity', 'electronegativity_pauling'
  ];

  if (numericFilters.includes(filter) && options[`${filter}Range`]) {
    return getSmoothGradientColor(element[filter], options[`${filter}Range`]);
  }

  return undefined;
}

// Smooth gradient from blue -> green -> yellow -> orange -> red
function getSmoothGradientColor(value, range) {
  if (!range || value == null) return undefined;
  const percent = (value - range.min) / (range.max - range.min);

  // Map percent to hue: 220 (blue) -> 120 (green) -> 60 (yellow) -> 10 (red)
  // You can adjust the hue stops for your taste!
  let hue;
  if (percent < 0.5) {
    // Blue to Green
    hue = 220 - (percent * 2) * 100; // 220 to 120
  } else {
    // Green to Red
    hue = 120 - ((percent - 0.5) * 2) * 110; // 120 to 10
  }

  // Clamp hue between 10 and 220
  hue = Math.max(10, Math.min(220, hue));

  // You can also interpolate saturation and lightness for more depth
  const saturation = 80;
  const lightness = 70 - percent * 20;

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
