export function getFilterOptions(elements, numericKeys = ['melt', 'boil', 'atomic_mass','density','electron_affinity','electronegativity_pauling']) {
  const options = {};
  numericKeys.forEach(key => {
    const values = elements
      .map(e => e[key])
      .filter(v => v !== null && v !== undefined && !isNaN(v));
    if (values.length) {
      options[`${key}Range`] = {
        min: Math.min(...values),
        max: Math.max(...values),
      };
    }
  });
  return options;
}
