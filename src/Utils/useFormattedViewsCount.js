const useFormattedViewsCount = (viewCount) => {
  const num = parseFloat(viewCount);

  if (isNaN(num)) {
    return null;
  }

  if (num < 1000) {
    return `${num} views `;
  } else if (num < 1000000) {
    const formattedNum = (num / 1000).toFixed(1);
    return `${formattedNum}K views `;
  } else {
    const formattedNum = (num / 1000000).toFixed(1);
    return `${formattedNum}M views `;
  }
};

export default useFormattedViewsCount;
