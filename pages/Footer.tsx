import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Footer = () => {
  const router = useRouter();
  const user = useSelector((x: any) => x.TaskReducer.user);
  const userFromQuery = router.query.user?.toString() || "";

  return (
    user ?
      <div className="flex justify-center">
        <div className="grid grid-cols-5 justify-center mt-auto bg-white py-[7px] px-[9px] gap-[6px] w-full font-medium text-[12px]">
          <Link href={`/?user=${user}`}>
            <div className={"flex flex-col justify-center items-center space-y-2 text-xs h-[64px] text-center rounded-lg items-center " + (router.pathname === "/" ? "bg-main  text-white" : "text-[#A4A4A4]")}>
              <img src="/images/feeder.svg" />
              <div className="text-center">Feeder</div>
            </div>
          </Link>
          <Link href={"/mine"}>
            <div className={"flex flex-col justify-center items-center space-y-2 text-xs h-[64px] text-center rounded-lg items-center " + (router.pathname === "/mine" ? "bg-main  text-white" : "text-[#A4A4A4]")}>
              <img src="/images/task.svg" />
              <div>Task</div>
            </div>
          </Link>
          <Link href={"/friend"}>
            <div className={"flex flex-col justify-center items-center space-y-2 text-xs h-[64px] text-center rounded-lg items-center " + (router.pathname === "/friend" ? "bg-main  text-white" : "text-[#A4A4A4]")}>
              <img src="/images/friends.svg" />
              <div>Friends</div>
            </div>
          </Link>
          <Link href={"/earn"}>
            <div className={"flex flex-col justify-center items-center space-y-2 text-xs h-[64px] text-center rounded-lg items-center " + (router.pathname === "/earn" ? "bg-main  text-white" : "text-[#A4A4A4]")}>
              <img src="/images/earn.svg" />
              <div>Earn</div>
            </div>
          </Link>
          <Link href={"/airdrop"}>
            <div className={"flex flex-col justify-center items-center space-y-2 text-xs h-[64px] text-center rounded-lg items-center " + (router.pathname === "/airdrop" ? "bg-main  text-white" : "text-[#A4A4A4]")}>
              <img src="/images/airdrop.svg" />
              <div>Airdrop</div>
            </div>
          </Link>
        </div>
      </div>
      : null
  )
}

export default Footer