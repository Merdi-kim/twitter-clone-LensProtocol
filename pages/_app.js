import { configureChains, WagmiConfig, createClient, chain } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

const { provider, chains } = configureChains(
  [chain.polygonMumbai],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID })]
);

const { connectors } = getDefaultWallets({
  appName: "Twitter",
  chains,
});

const client = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default MyApp;
