import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";
import ChatElement from "./ChatElement";
import { generateRandomName } from "../Utils/helper";
import { generateRandomString } from "../Utils/helper";

const LiveChatBox = ({ id }) => {
  const [userMessage, setUserMessage] = useState("");
  const dispatch = useDispatch();
  const chatList = useSelector((store) => store.chat);

  console.log(chatList);

  const getLiveData = async () => {
    // const liveData = await fetch("api here");
    // setLiveChats({});

    dispatch(
      addMessage({
        userName: generateRandomName(),
        message: generateRandomString(50),
      })
    );
  };

  useEffect(() => {
    const i = setInterval(() => {
      getLiveData();
    }, 1500);

    return () => {
      clearInterval(i);
    };
    // eslint-disable-next-line
  }, [id]);

  if (!chatList) return null;
  return (
    <div className="w-full bg-slate-100 mx-3 border border-gray-400 rounded-lg ">
      <div className="border border-b-gray-500 text-lg font-semibold">
        <h3 className="mx-3 p-2">Live Chats </h3>
      </div>
      <div className=" w-full  h-[500px] m-2 flex-col overflow-y-scroll">
        {chatList.map((item, index) => {
          return <ChatElement key={index} {...item} />;
        })}
      </div>

      <div className="w-full h-20 p-1 px-2 text-base border border-t-gray-500">
        <h4 className="text-base">Sritam Behera :</h4>
        <div className="p-1 w-full flex items-center">
          <input
            className="p-1 w-10/12 border border-gray-400"
            type="text"
            value={userMessage}
            onChange={(e) => {
              setUserMessage(e.target.value);
            }}
          />
          <button
            className="bg-gray-200 rounded-full p-1 mx-2 "
            onClick={() => {
              userMessage &&
                dispatch(
                  addMessage({
                    userName: "Sritam",
                    message: userMessage,
                  })
                );
              setUserMessage("");
            }}
          >
            <img
              className="h-7"
              src="https://cdn-icons-png.flaticon.com/512/3106/3106794.png"
              alt="send"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveChatBox;
