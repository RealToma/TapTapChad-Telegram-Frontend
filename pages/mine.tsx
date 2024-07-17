"use Client";

import Card from "@/app/components/common/card";
import { useSelector } from "react-redux";

function Mine() {
  const allTasks = useSelector((x: any) => x.TaskReducer.tasks)
  const mainTasks = allTasks?.filter((x: any) => x.extra === false)
  const user = useSelector((x: any) => x.TaskReducer.user);
  const handleImageLoad = () => {
    // setImagesLoaded((prev) => {
    //     console.log(prev)
    //     const newCount = prev + 1;
    //     console.log(newCount)
    //     if (newCount === totalImages) {
    //         setLoading(false);
    //     }
    //     return newCount;
    // });
  };

  return (
    <div className="flex-1 h-0">
      <div className="py-7 mb-[90px] px-5 text-white rounded-t-3xl border-t border-[#DFDCD5] bg-[#F3EFE6] h-full overflow-auto">
        {mainTasks.map((x: any, i: number) =>
          <Card
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
            title="Telegram News"
            description="Conference Organizers"
            price="10000"
            link="https://t.me/telegram"
            img="/images/telegram.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="TON Society"
            description="Conference Organizers"
            price="10000"
            link="https://t.me/tonsociety"
            img="/images/TON.png"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="The Open Network"
            description="Conference Organizers"
            price="10000"
            link="https://t.me/tonblockchain"
            img="/images/TON.png"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="TMA Clicker Token VWS Game"
            description="Conference Organizers"
            price="10000"
            link="https://tonresear.ch/t/tma-clicker-token-vws-game-mining-pool-vws-ton-dedust-io-mining-nfts-buidls-dorahacks-io/18457/3"
            img="/images/TON.png"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Telegram MagicVipClub Channel"
            price="10000"
            link="https://t.me/MagicVipClub"
            img="/images/telegram.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Telegram MiningVws Channel"
            price="10000"
            link="https://t.me/miningvws"
            img="/images/telegram.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Telegram VirtualsWorlds Channel"
            price="10000"
            link="https://t.me/VirtualsWorlds"
            img="/images/telegram.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Telegram MagicNFTcollection Channel"
            price="10000"
            link="https://t.me/MagicNFTcollections"
            img="/images/telegram.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Telegram MagicVipPeople Channel"
            price="10000"
            link="https://t.me/MagicVipPeople"
            img="/images/telegram.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Telegram P2PExchange Channel"
            price="10000"
            link="https://t.me/p2pExchenges"
            img="/images/telegram.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Telegram AirdropNftOpensea Channel"
            price="10000"
            link="https://t.me/AirdropNftOpensea"
            img="/images/telegram.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Telegram MagicNftClub Channel"
            price="10000"
            link="https://t.me/MagicNftClub"
            img="/images/telegram.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Swap VWS"
            price="10000"
            link="https://dedust.io/swap/TON/VWS"
            img="/images/apecoin.png"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Mining Pool VWS/TON"
            price="10000"
            link="https://dedust.io/pools/EQCCa6jA_VzoQi76cAHmumoJfZbglVtY-DL-k8-f9h3vUOy2"
            img="/images/apecoin.png"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Swap bot"
            price="10000"
            link="https://t.me/tonRocketBot/cex?startapp=trade-VWS-TON"
            img="/images/apecoin.png"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Mining NFTs"
            price="10000"
            link="http://getgems.io/virtualsworlds"
            img="/images/apecoin.png"
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

export default Mine;
