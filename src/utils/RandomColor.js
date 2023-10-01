export const getRandomColor = () => {
  const min = 50; // Minimum value for each RGB channel
  const max = 200; // Maximum value for each RGB channel

  // Generate random values for R, G, and B between min and max
  const r = Math.floor(Math.random() * (max - min + 1)) + min;
  const g = Math.floor(Math.random() * (max - min + 1)) + min;
  const b = Math.floor(Math.random() * (max - min + 1)) + min;

  return `rgb(${r},${g},${b})`;
};
