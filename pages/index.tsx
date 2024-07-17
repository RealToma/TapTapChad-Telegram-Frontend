"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "@/app/axios";
import { updateItem } from "../app/lib/api";
import Lottie from "react-lottie";
import * as idleAnim from "../app/animations/Ghost_Idle.json";
import * as eatAnim from "../app/animations/Ghost_Eat.json";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/reducers/TaskReducer";

const LEVEL_STEP = 5000;

export default function Index() {
  const dispatch = useDispatch();
  const user = useSelector((x: any) => x.TaskReducer.user);
  const [count, setCount] = useState<number>(0);
  const [mount, setMount] = useState<number>(1000);
  const [showAnimation, setShowAnimation] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [pulses, setPulses] = useState([]);
  const router = useRouter();
  const userFromQuery = router.query.user?.toString() || "";

  const defaultOption = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const animsOption = {
    ...defaultOption,
    animationData: showAnimation ? eatAnim : idleAnim,
  };

  const handleChange = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
    }, 500);
  };
  const getLevelInfo = () => {
    switch (Math.floor(count / LEVEL_STEP)) {
      case 0:
        return { text: "Bronze", number: 1 };
      case 1:
        return { text: "Silver", number: 2 };
      case 2:
        return { text: "Platinum", number: 3 };
      case 3:
        return { text: "Diamond", number: 4 };
      case 4:
        return { text: "Master", number: 5 };
      case 5:
        return { text: "Grandmaster", number: 6 };
      case 6:
        return { text: "Elite", number: 7 };
      case 7:
        return { text: "Legendary", number: 8 };
      case 8:
        return { text: "Mythic", number: 9 };
      default:
        return { text: "Mythic", number: 9 };
    }
  };
  const handleIncrement = (event: React.MouseEvent<HTMLDivElement>) => {
    let payload: any = [...pulses];
    payload.push(0);
    setPulses(payload);
    // const { clientX, clientY } = event
    const { userAgent } = window.navigator;
    if (!user || !userAgent.includes("Mobi")) return;
    const { clientX, clientY } = event;
    console.log("Mouse X: ", clientX, "Mouse Y: ", clientY);
    setMousePosition({ x: clientX, y: clientY });
    const newCount = count + 1;
    setCount(newCount);
    setMount(mount - 1);
    if (!showAnimation) handleChange();
    try {
      updateItem(user, newCount); // Use the correct item ID here
    } catch (error) {
      console.error("Failed to update item", error);
    }
  };
  useEffect(() => {
    if (mount < 1000) {
      const intervalId = setInterval(() => {
        setMount((prevMount) => Math.min(prevMount + 1, 1000)); // Ensure mount doesn't exceed 1000
      }, 1500); // Adjust the interval as needed

      return () => clearInterval(intervalId); // Clean up the interval on unmount
    }
  }, [mount]);

  useEffect(() => {
    if (userFromQuery) {
      const func = async () => {
        const { data } = await axios.post(
          "https://ham-bubble-bot-be.onrender.com/users",
          {
            user: userFromQuery,
          }
        );
        dispatch(setUser(data.user));
      };
      func();
    }
  }, [userFromQuery]);

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const { data } = await axios.get(
          "https://ham-bubble-bot-be.onrender.com/users"
        );
        const item = data.find((item: any) => item.tgid === user); // Adjust the condition if needed
        setCount(item?.mount ?? 0);
      }
    };
    fetchData();
  }, [user]);
  return (
    <>
      <div>
        <style>
          {`
            .animation {
              opacity: 1;
              animation-name: example;
              animation-duration: 1s;
              animation-fill-mode: forwards;
            }

            @keyframes example {
              0%   {opacity: 1; left :${mousePosition.x - 25 + "px"}; top:${
            mousePosition.y + "px"
          };}
              100% {opacity: 0; left: ${mousePosition.x - 25 + "px"}; top:${
            mousePosition.y - 200 + "px"
          };}
            }
            `}
        </style>
      </div>
      <div className="relative rounded-t-3xl border-t border-[#DFDCD5] flex-1 h-0 overflow-x-hidden">
        <div className="flex flex-col relative z-[1] px-5 py-7 bg-[#F3EFE6] overflow-y-auto h-full">
          <div className="flex flex-col space-y-5 relative z-[2]">
            {/* <div className="flex flex-col items-start p-5 text-xs font-medium bg-gradient-card border border-gray-900 rounded-2xl text-center">
              <div className="text-white">EARN PER TAP</div>
              <div className="flex justify-center items-center space-x-2">
                <img
                  src="/images/dollar-icon.svg"
                  alt="dollar"
                  className="w-6 h-6"
                ></img>
                <div className="font-bold text-white text-[24px] gradient-text ">+1</div>
              </div>
            </div> */}
            <div className="relative overflow-hidden rounded-[24px] group">
              <img
                className="absolute top-1/2 -translate-y-1/2 right-0 h-full object-center object-cover transition duration-[.7s] origin-right group-hover:scale-[1.2]"
                src="/images/levelup.png"
                alt=""
              />
              <div className="flex flex-col items-start p-[26px] font-medium bg-main rounded-[24px] text-center">
                <div className="font-medium text-[14px] text-white relative z-[1]">
                  Bubbles to level up
                </div>
                <div className="font-bold text-[22px] text-white">
                  ${LEVEL_STEP}
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[24px] group border border-[#E3E3E3]">
              <img
                className="absolute top-1/2 -translate-y-1/2 right-0 h-full object-center object-cover transition duration-[.7s] origin-right group-hover:scale-[1.2]"
                src="/images/ham.png"
                alt=""
              />
              <div className="flex flex-col items-start p-[26px] font-medium bg-white rounded-[24px] text-center">
                <div className="font-medium text-[14px] text-[#6E6E6E] relative z-[1]">
                  Bubble per hour
                </div>
                <div className="font-bold text-[22px] text-main">
                  {20 * getLevelInfo().number}
                </div>
              </div>
            </div>
          </div>
          <div
            className="mt-[23px] w-[300px] flex justify-center items-center rounded-full mx-auto cursor-pointer relative"
            onClick={handleIncrement}
          >
            <Lottie options={animsOption} isClickToPauseDisabled />
            <img
              src="/images/tapper-hand.svg"
              alt="hamster"
              className="absolute bottom-[-61px] right-[-20px] z-[2] tapper pointer-events-none select-none"
            ></img>
            {pulses.map((x: any, i: number) => (
              <div
                className={`animation font-medium text-[50px] text-[black] pointer-events-none select-none translate-x-1/2"`}
                style={{
                  position: "fixed",
                  left: mousePosition.x + "px",
                  top: mousePosition.y + "px",
                }}
                key={i}
              >
                +1
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-[43px] items-center space-x-3 relative z-[2]">
            <img src="/images/ham-md.svg" alt="dollar"></img>
            <div className="text-[22px] font-semibold text-black">{count}</div>
          </div>
          <div className="flex mt-[34px] text-white items-center relative z-[2] font-bold">
            <div className="font-semibold text-[14px] text-black">
              {getLevelInfo().text}
            </div>
            <div className="ml-auto font-semibold text-[14px] text-main">
              <span className="text-[12px] text-black mr-1.5">Level</span>
              {getLevelInfo().number}/9
            </div>
          </div>
          <div className="z-[2] relative overflow-hidden min-h-3 rounded-full bg-[#D9D9D9] font-bold mt-2">
            <div
              className="h-full rounded-full transition-transform !duration-500 bg-main"
              style={{
                transform: `translateX(-${
                  100 - ((count % LEVEL_STEP) / LEVEL_STEP) * 100
                }%)`,
              }}
            ></div>
          </div>
          <div className="flex mt-5 font-bold text-[18px] text-black">
            <div className="flex items-center space-x-2">
              <img src="/images/lightening.svg" />
              <span>
                <span className="text-main">{mount}</span> / 1000
              </span>
            </div>
            {/* <div className="flex items-center space-x-2 ml-auto">
              <img src="/images/boost.svg" />
              <span>Boost</span>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
0;
