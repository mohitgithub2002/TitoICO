import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { bsc, mainnet, sepolia, polygonMumbai } from "wagmi/chains";

const chains = [mainnet, sepolia, bsc, polygonMumbai];
const projectId = "6b098530af4797b4b0dcb37e0534845a";

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

const App = () => {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/Dashboard" Component={Dashboard} />
        </Routes>
        <Footer />
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
};

export default App;
