const useDateDifference = (releaseDate) => {
  const currDate = new Date();
  const videoDate = new Date(releaseDate);

  const timeDifference = currDate - videoDate;
  const seconds = Math.floor(timeDifference / 1000);

  let interval = Math.floor(seconds / 31536000); //Second in a year

  if (interval >= 1) {
    return ` ${interval} ${interval > 1 ? "years ago" : "year ago"}`;
  }

  interval = Math.floor(seconds / 2592000); // Seconds in a month

  if (interval >= 1) {
    return ` ${interval} ${interval > 1 ? "months ago" : "month ago"}`;
  }

  interval = Math.floor(seconds / 86400); // Seconds in a day

  if (interval >= 1) {
    return ` ${interval} ${interval > 1 ? "days ago" : "day ago"}`;
  }

  interval = Math.floor(seconds / 3600); // Seconds in an hour

  if (interval >= 1) {
    return ` ${interval} ${interval > 1 ? "hours ago" : "hour ago"}`;
  }

  interval = Math.floor(seconds / 60); // Seconds in a minute

  if (interval >= 1) {
    return ` ${interval} ${interval > 1 ? "minutes ago" : "minute ago"}`;
  }

  return "Just now";
};

export default useDateDifference;
