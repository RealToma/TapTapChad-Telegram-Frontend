const Header = () => {
  return (
    <div className="px-5 py-3 flex items-center relative z-[1]">
      <div className="flex items-center space-x-3 flex-1 w-0">
        <img src="/images/logo-long.svg" alt="AvatarImg"></img>
        {/* <div className=" text-sm font-medium text-white flex-1 w-0 truncate">@{user}</div> */}
      </div>
    </div>
  );
};

export default Header;
