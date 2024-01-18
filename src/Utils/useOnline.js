import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnlineEvent = window.addEventListener("online", () => {
      setIsOnline(true);
    });
    const handleOfflineEvent = window.addEventListener("offline", () => {
      setIsOnline(false);
    });

    return window.removeEventListener(handleOnlineEvent, handleOfflineEvent);
    // eslint-disable-next-line
  }, []);

  return isOnline;
};

export default useOnline;
