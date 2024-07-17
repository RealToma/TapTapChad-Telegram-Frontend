import { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import axios from "../app/axios";
import { useSelector } from "react-redux";

interface Item {
  t_id: string;
  mount: number;
}

function Friend() {
  const user = useSelector((x: any) => x.TaskReducer.user);
  const [items, setItems] = useState<Item[]>([]);
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const response = await axios.post(
          "https://ham-bubble-bot-be.onrender.com/friends",
          {
            user,
          }
        );
        if (response.data.items == undefined) setItems([]);
        else setItems(response.data.items);
      }
    };
    fetchData();
  }, [user]);

  const handleInviteClick = async () => {
    // Generate the invite link
    const inviteLink = `https://t.me/bubble_fe_bot?start=${user}\nPlay with me, become cryptoexchange CEO and get a token airdrop`;
    console.log(inviteLink);

    // Show the invite link in a snackbar or modal
    enqueueSnackbar("Invite link copied to clipboard!", { variant: "success" });

    // Copy the link to the clipboard
    const shareLink = `https://t.me/share/url?url=${encodeURIComponent(
      inviteLink
    )}`;

    // Open the share link in a new window
    window.open(shareLink, "_blank");
  };

  return (
    <>
      <div className="flex flex-col px-5 pt-[23px] rounded-t-3xl border-t border-[#DFDCD5] bg-[#F3EFE6] flex-1 h-0 overflow-auto">
        <div className="font-bold text-[42px] text-center text-main">
          Friends
        </div>
        <div className="mt-3 font-medium text-[14px] text-center text-[#6E6E6E]">
          You and your friend will receive bonuses
        </div>
        <div className="flex justify-center space-x-2 mt-8">
          <button
            className="px-[16.5px] py-[15.5px] font-bold text-[14px] leading-[20px] bg-main text-white rounded-[12px] disabled:cursor-not-allowed"
            onClick={handleInviteClick}
          >
            Invite a friend
          </button>
          <button className="px-[9.5px] py-[9px] bg-main rounded-[12px] disabled:cursor-not-allowed">
            <img src="/images/copy.svg" />
          </button>
        </div>
        <div className="flex bg-white border border-[#E3E3E3] rounded-[24px] p-6 space-x-5 mt-[25px]">
          <img src="/images/gift1.svg" alt="gift"></img>
          <div className="text-white text-sm font-normal flex flex-col space-y-2">
            <p className="font-semibold text-[14px] text-[#6E6E6E]">
              Invite a friend
            </p>
            <div className="flex items-center space-x-2">
              <img src="/images/ham.svg" alt="dollar" className="w-6 h-6"></img>
              <div className="font-extrabold text-[16px] text-main">+5,000</div>
              <div className="font-medium text-[12px] text-[#4B4B4B]">
                for you and your friend
              </div>
            </div>
          </div>
        </div>
        <div className="flex bg-white border border-[#E3E3E3] rounded-[24px] p-6 space-x-5 mt-3">
          <img src="/images/gift1.svg" alt="gift"></img>
          <div className="text-white text-sm flex flex-col space-y-2">
            <p className="font-semibold text-[14px] text-[#6E6E6E]">
              Invite a friend with Telegram Premium
            </p>
            <div className="flex items-center space-x-2">
              <img src="/images/ham.svg" alt="dollar" className="w-6 h-6"></img>
              <div className="font-extrabold text-[16px] text-main">
                +10,000
              </div>
              <div className="font-medium text-[12px] text-[#4B4B4B]">
                for you and your friend
              </div>
            </div>
          </div>
        </div>
        <div className="font-medium text-black mt-[43px]">
          List of your friends
        </div>
        {items.length === 0 ? (
          <>
            <div className="font-medium text-[14px] text-[#6E6E6E] mt-3 mb-[25px]">
              You haven&apos;t invited anyone yet
            </div>
            <img className="w-[186px] mx-auto" src="/images/crying.svg" />
          </>
        ) : (
          <div className="mb-[100px]">
            {items.map((item, index) => (
              <div key={index}>
                <div className="flex flex-row items-center mt-5 bg-[#F3EFE6] border border-[#DFDCD5] p-2 px-4 mx-4 rounded-lg">
                  <div className="text-white text-lg">{index + 1}</div>
                  <div className="ml-4 text-white">{item.t_id}</div>
                  <img
                    src="/images/dollar-icon.svg"
                    alt="dollar"
                    className="w-4 h-4 ml-6"
                  ></img>
                  <div className="ml-2 text-white">{item.mount}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Friend;
