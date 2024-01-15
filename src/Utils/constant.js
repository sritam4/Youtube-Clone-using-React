const API_KEY = "AIzaSyCuPj37X2ND3p1VIQzpPzNFM-JN_HGzwRU";
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

export const RECOMENDED_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&part=contentDetails&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY +
  "&videoCategoryId=";
