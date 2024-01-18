const useFormattedLikesCount = (likeCount) => {
  const num = parseFloat(likeCount);

  if (isNaN(num)) {
    return null;
  }

  if (num < 1000) {
    return `${num} `;
  } else if (num < 1000000) {
    const formattedNum = parseInt((num / 1000).toFixed(1));
    return `${formattedNum}K  `;
  } else {
    const formattedNum = (num / 1000000).toFixed(1);
    return `${formattedNum}M  `;
  }
};

export default useFormattedLikesCount;
