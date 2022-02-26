/* eslint-disable node/no-extraneous-import */
/* eslint-disable node/no-unpublished-import */
/* eslint-disable no-use-before-define */
/* eslint-disable node/no-missing-import */
import React from "react";
import ReactDOM from "react-dom";
import "tailwindcss/tailwind.css";
import "tw-elements";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <title>Testnet Major Faucet</title>
        <meta
          name="description"
          content="Stdoneサービス向けtestnet erc20 token Faucetサイト"
        />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0"
        ></meta>
        <head prefix="og: http://ogp.me/ns#" />
        <meta
          property="og:url"
          content="https://testnet-major-faucet.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Testnet Major Faucet" />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="Testnet Major Faucet" />
        <meta
          property="og:image"
          content="https://1.bp.blogspot.com/-Z5C0RZ6fQoY/VozfYEKr1GI/AAAAAAAA2kY/JGt6e1_y7QA/s400/mizu_suidou_stop.png"
        />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="@watson_sei" />
        <meta
          property="twitter:url"
          content="https://testnet-major-faucet.vercel.app/"
        />
        <meta property="twitter:title" content="Testnet Major Faucet" />
        <meta
          property="twitter:description"
          content="このFaucetは、Stdoneサービスのテストネット版で利用する通貨を一時的に送信します。"
        />
        <meta
          property="twitter:image"
          content="https://1.bp.blogspot.com/-Z5C0RZ6fQoY/VozfYEKr1GI/AAAAAAAA2kY/JGt6e1_y7QA/s400/mizu_suidou_stop.png"
        />
      </Helmet>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
