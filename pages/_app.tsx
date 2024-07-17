import type { AppProps } from "next/app";
import "../app/globals.css";
import { SnackbarProvider } from "notistack";
import axios from "@/app/axios";
import Header from "./Header";
import Footer from "./Footer";
import { persistor, store } from "../redux";
import {
  Provider as StoreProvider,
  useDispatch,
  useSelector,
} from "react-redux";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { setTasks } from "@/redux/reducers/TaskReducer";
import { PersistGate } from "redux-persist/integration/react";
declare const window: any;
const AppWrapper = ({ Component, pageProps }: any) => {
  const dispatch = useDispatch();
  const isLoaded = useSelector((x: any) => x.TaskReducer.isLoaded);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const { userAgent } = window.navigator;
    setIsMobile(userAgent.includes("Mobi"));
    setIsMobile(true);

    const func = async () => {
      const { data } = await axios.get(
        "https://ham-bubble-bot-be.onrender.com/tasks"
      );
      dispatch(setTasks(data));
    };
    func();
  }, []);

  useEffect(() => {
    function buttonOn() {
      // do something on btn click
    }
    // let main_page = document.querySelector("#main_page");
    // alert(main_page);

    // if (main_page) {
    //   window.Telegram.WebApp.expand(); //expand window after page loading
    //   console.log(window.Telegram.WebApp);

    //   window.Telegram.WebApp.MainButton.onClick(buttonOn); //set func on main button click
    //   window.Telegram.WebApp.MainButton.setParams({ text: "Корзина" }); // set byn params
    //   window.Telegram.WebApp.MainButton.show(); //show telegram btn
    // }
    window.Telegram.WebApp.expand();
  });

  return isMobile ? (
    !isLoaded ? (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    ) : (
      <Component {...pageProps} />
    )
  ) : (
    <div className="flex flex-col space-y-5 justify-center items-center fixed top-0 left-0 w-full h-full bg-[#F3EFE6] z-[2]">
      <img className="max-w-[186px]" src="/images/crying.svg" />
      <span>Not available in PC.</span>
    </div>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SnackbarProvider>
          <Header />
          <AppWrapper Component={Component} pageProps={pageProps} />
          <Footer />
        </SnackbarProvider>
      </PersistGate>
    </StoreProvider>
  );
}
