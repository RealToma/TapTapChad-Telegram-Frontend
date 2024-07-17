"use Client";

import YoutubeCard from "@/app/components/common/youtubecard";
import { useSelector } from "react-redux";

function Earn() {
  const allTasks = useSelector((x: any) => x.TaskReducer.tasks)
  const extraTasks = allTasks?.filter((x: any) => x.extra === true)
  const user = useSelector((x: any) => x.TaskReducer.user);

  const handleImageLoad = () => {
  }

  return (
    <div className="flex-1 h-0">
      <div className="py-[30px] mb-[90px] px-5 text-white rounded-t-3xl border-t border-[#DFDCD5] bg-[#F3EFE6] h-full overflow-auto">
        <div className="font-bold text-[42px] text-center text-main">Learn To Earn</div>
        <div className="pb-[26px] font-medium text-[14px] text-center text-[#6E6E6E]">Listen and learn</div>
        {/* <Card
            title="Telegram Channel"
            price="10000"
            link="https://t.me/MagicVipClub"
            img="/images/telegram.svg"
            onLoad={handleImageLoad}
          ></Card> */}
        {extraTasks.map((x: any, i: number) =>
          <YoutubeCard
            key={i}
            title={x.title}
            description={x.description}
            price={x.price}
            link={x.link}
            img={x.image}
            onLoad={handleImageLoad}
          />
        )}
        {/* <Card
          title="Mexc"
          price="10000"
          link="https://www.mexc.com/ru-RU/register?inviteCode=mexc-Magik"
          img="/images/mexc.png"
          onLoad={handleImageLoad}
        ></Card>
        <Card
          title="Gate"
          price="10000"
          link="https://www.gate.io/signup/11024473"
          img="/images/gate-io.png"
          onLoad={handleImageLoad}
        ></Card>
        <Card
          title="Bitmart"
          price="10000"
          link="https://www.bitmart.com/register-referral/en?r=TxcR8r"
          img="/images/bitmart.png"
          onLoad={handleImageLoad}
        ></Card>
        <Card
          title="Bingx"
          price="10000"
          link="https://bingx.com/invite/E5RZZM"
          img="/images/bingx.png"
          onLoad={handleImageLoad}
        ></Card>
        <Card
          title="Getgems"
          price="10000"
          link="http://getgems.io/virtualsworlds"
          img="/images/getgem.png"
          onLoad={handleImageLoad}
        ></Card>
        <Card
          title="Twitter"
          price="10000"
          link="http://x.com/VirtualsWorlds"
          img="/images/twitterIcon-BqHkf0Wv.png"
          onLoad={handleImageLoad}
        ></Card>
        <Card
          title="Youtube"
          price="10000"
          link="http://youtube.com/@magicnft"
          img="/images/youtube.png"
          onLoad={handleImageLoad}
        ></Card>
        <Card
          title="Github"
          price="10000"
          link="http://github.com/MagicVipPeople"
          img="/images/github.png"
          onLoad={handleImageLoad}
        ></Card>
        <Card
          title="Facebook"
          price="10000"
          link="http://www.facebook.com/MagicVipClub"
          img="/images/facebook.png"
          onLoad={handleImageLoad}
        ></Card>
        <Card
          title="Instagram"
          price="10000"
          link="http://www.instagram.com/magiknft"
          img="/images/instagram.png"
          onLoad={handleImageLoad}
        ></Card>
        <Card
          title="Ticktok"
          price="10000"
          link=" http://www.tiktok.com/@spacetickets"
          img="/images/ticktok.png"
          onLoad={handleImageLoad}
        ></Card>
        <Card
          title="Gate Magic-Game"
          price="10000"
          link="http://gate.io/nft/collection/11879/Magic-Game"
          img="/images/gate-io.png"
          onLoad={handleImageLoad}
        ></Card>
        <Card
          title="Gate Mystic-Collection"
          price="10000"
          link="http://gate.io/nft/collection/11875/Mystic-Collections"
          img="/images/gate-io.png"
          onLoad={handleImageLoad}
        ></Card>
        <Card
          title="Gate Virtual-Worlds"
          price="10000"
          link="http://gate.io/nft/collection/11910/Virtual-Worlds"
          img="/images/gate-io.png"
          onLoad={handleImageLoad}
        ></Card>
        <Card
          title="Gate BTC-Dragons"
          price="10000"
          link="http://gate.io/en/nft/collection/19896/BTC-Dragons"
          img="/images/gate-io.png"
          onLoad={handleImageLoad}
        ></Card>
        <Card
          title="Gate BTC-Cards"
          price="10000"
          link="http://gate.io/en/nft/collection/19897/Cryptocurrency-BTC-cards"
          img="/images/gate-io.png"
          onLoad={handleImageLoad}
        ></Card>
        <Card
          title="Gate BTC-Pandas"
          price="10000"
          link="http://gate.io/en/nft/collection/19895/BTC-Pandas"
          img="/images/gate-io.png"
          onLoad={handleImageLoad}
        ></Card>
        <Card
          title="Gate Earths"
          price="10000"
          link="http://gate.io/en/nft/collection/18106/Earths"
          img="/images/gate-io.png"
          onLoad={handleImageLoad}
        ></Card>
        <Card
          title="Gate Lions"
          price="10000"
          link="http://gate.io/en/nft/collection/19995/Lions"
          img="/images/gate-io.png"
          onLoad={handleImageLoad}
        ></Card>
        <Card
          title="Gate Crypto-Dragons"
          price="10000"
          link="http://gate.io/en/nft/collection/20025/Crypto-Dragons"
          img="/images/gate-io.png"
          onLoad={handleImageLoad}
        ></Card>
        <Card
          title="Referrals Airdrop"
          price="10000"
          link="https://t.me/ReferralsAirdrop"
          img="/images/TON.png"
          onLoad={handleImageLoad}
        ></Card>
        <Card
          title="Rarible"
          price="10000"
          link="http://rarible.com/magicnftcollections"
          img="/images/rarible.png"
          onLoad={handleImageLoad}
        ></Card>
        <Card
          title="Opensea"
          price="10000"
          link="http://opensea.io/MagicNFTcollections"
          img="/images/opensea.png"
          onLoad={handleImageLoad}
        ></Card>
        <Card
          title="Tonresear"
          price="10000"
          link="https://tonresear.ch/t/tma-clicker-token-vws-game-mining-pool-vws-ton-dedust-io-mining-nfts-buidls-dorahacks-io/18457/3"
          img="/images/TON.png"
          onLoad={handleImageLoad}
        ></Card>
        <Card
          title="Ton Jetttons"
          description="Subscribe and mining will begin for you"
          price="10000"
          link="https://ton.app/ru/jettons/EQBfX9KO5yIFprHWPpJp3OsX-6cjLjEJF-h5uIQE3eLJY8_h"
          img="/images/getgem.png"
          onLoad={handleImageLoad}
        ></Card>
        <Card
          title="Ton Mining-Nft"
          description="Subscribe and mining will begin for you"
          price="10000"
          link="https://ton.app/nft/mining-nft?id=1534"
          img="/images/getgem.png"
          onLoad={handleImageLoad}
        ></Card>
        <Card
          title="Ton Utilities"
          description="Subscribe and mining will begin for you"
          price="10000"
          link="https://ton.app/utilities/vws-utilities?id=1531"
          img="/images/getgem.png"
          onLoad={handleImageLoad}
        ></Card>
        <Card
          title="Ton Magic-vip-People"
          description="Subscribe and mining will begin for you"
          price="10000"
          link="https://ton.app/channels/magic-vip-people?id=1530"
          img="/images/getgem.png"
          onLoad={handleImageLoad}
        ></Card>
        <Card
          title="Ton Mining-Vws"
          description="Subscribe and mining will begin for you"
          price="10000"
          link="https://ton.app/chats/mining-vws-and-mvp?id=1529"
          img="/images/getgem.png"
          onLoad={handleImageLoad}
        ></Card>
        <Card
          title="Ton Vws-games"
          description="Subscribe and mining will begin for you"
          price="10000"
          link="https://ton.app/games/vws-games?id=1532"
          img="/images/getgem.png"
          onLoad={handleImageLoad}
        ></Card> */}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // Fetch or define your static props here
  return {
    props: {
      data: {}, // Example data
    },
  };
}

export default Earn;
