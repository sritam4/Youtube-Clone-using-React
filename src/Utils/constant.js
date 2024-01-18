const API_KEY = process.env.REACT_APP_API_KEY;
export const YOUTUBE_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;

export const VIDEO_API_URL =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&key= " +
  API_KEY +
  "&id=";

export const SEARCH_SUGGESTION_URL =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const COMMENT_API_URL =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&moderationStatus=published&order=time&key=" +
  API_KEY +
  "&videoId=";

export const CHANNEL_API_URL =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  API_KEY +
  "&id=";

export const VIDEO_DURATION_API =
  "https://www.googleapis.com/youtube/v3/videos?part=contentDetails&key=" +
  API_KEY +
  "&id=";

export const RECOMENDED_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&part=contentDetails&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY +
  "&videoCategoryId=";

export const SEARCH_API_URL =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&regionCode=IN&type=video&key=" +
  API_KEY +
  "&q=";

export const YOUTUBE_LOGO_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHMUb8U4VeW2y-RflH7U7Yp0tsx1hJv0PwQ&usqp=CAU";
