import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./global.css";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const queryClient = new QueryClient();
const container = document.getElementById("root");
const root = createRoot(container!);


root.render(
  // <PayPalScriptProvider options={{ clientId: "AZ14k0vPCKHE5Ho2Rnprj0BM5ap081VPvnA5AAK880mlnmFPYpeh3y37GFxtfAbgSeQWJpF9WGdArvMB", components: "buttons", currency: "USD", intent: "capture", }}>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  // </PayPalScriptProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
