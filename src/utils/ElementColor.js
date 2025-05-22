export function getElementBackgroundColor(element, filter, options) {
  if (!filter) return undefined;

  // Block coloring (for block filter)
  if (filter === "block") {
    if (element.block && ['s', 'p', 'd', 'f'].includes(element.block)) {
      return `var(--color-${element.block}-block)`;
    }
    return undefined; // Fallback if block is not s, p, d, or f
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

// Smooth gradient based on theme variables
function getSmoothGradientColor(value, range) {
  if (!range || value == null) return undefined;
  const percent = Math.max(0, Math.min(1, (value - range.min) / (range.max - range.min))); // Ensure percent is 0-1

  const rootStyle = getComputedStyle(document.documentElement);
  const hueStart = parseFloat(rootStyle.getPropertyValue('--gradient-hue-start').trim());
  const hueMid = parseFloat(rootStyle.getPropertyValue('--gradient-hue-mid').trim());
  const hueEnd = parseFloat(rootStyle.getPropertyValue('--gradient-hue-end').trim());

  const saturation = rootStyle.getPropertyValue('--gradient-saturation').trim(); // e.g., "80%"
  const baseLightness = parseFloat(rootStyle.getPropertyValue('--gradient-lightness-base').trim());
  const lightnessFactor = parseFloat(rootStyle.getPropertyValue('--gradient-lightness-factor').trim());

  let hue;
  if (percent < 0.5) {
    // Interpolate from hueStart to hueMid
    hue = hueStart - (percent * 2) * (hueStart - hueMid);
  } else {
    // Interpolate from hueMid to hueEnd
    hue = hueMid - ((percent - 0.5) * 2) * (hueMid - hueEnd);
  }

  // Clamp hue: Ensure it's within the min/max of the defined stops
  const minHue = Math.min(hueStart, hueMid, hueEnd);
  const maxHue = Math.max(hueStart, hueMid, hueEnd);
  hue = Math.max(minHue, Math.min(maxHue, hue));
  
  const finalLightness = baseLightness - percent * lightnessFactor;
  // Ensure lightness stays within a reasonable range, e.g., 10% to 90%
  const clampedLightness = Math.max(10, Math.min(90, finalLightness));

  return `hsl(${hue}, ${saturation}, ${clampedLightness}%)`;
}
