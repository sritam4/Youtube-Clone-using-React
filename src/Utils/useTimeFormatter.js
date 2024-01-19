const useTimeFormatter = (duration) => {
  if (!duration) {
    return null;
  }
  const match = duration?.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  if (match) {
    const hours = match[1] && (match[1] ? parseInt(match[1]) : 0);
    const minutes = match[2] && match[2] ? parseInt(match[2]) : 0;
    const seconds = match[3] && match[3] ? parseInt(match[3]) : 0;

    if (hours >= 0) {
      return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    }
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  }
};

export default useTimeFormatter;
