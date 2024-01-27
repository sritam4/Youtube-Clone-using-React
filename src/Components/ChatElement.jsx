import React from "react";

const ChatElement = ({ userName, message }) => {
  return (
    <div className="w-full p-2 flex items-start mt-auto">
      <div>
        <img
          className="w-6 h-6"
          src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
          alt="lg"
        />
      </div>
      <div className="w-11/12 flex overflow-x-hidden">
        <span className="px-2 font-semibold text-base">{userName}</span>
        <span className="text-base">{message}</span>
      </div>
    </div>
  );
};

export default ChatElement;
