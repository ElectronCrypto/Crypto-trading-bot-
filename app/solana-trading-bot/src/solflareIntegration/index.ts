import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { SolflareWalletAdapter } from "@solana/wallet-adapter-solflare";
import { Connection, clusterApiUrl, Transaction } from "@solana/web3.js";

// Initialize Solflare Wallet
const wallet = new SolflareWalletAdapter({
  network: WalletAdapterNetwork.Mainnet,
});

// Connect to the wallet
wallet.on("connect", (publicKey) => {
  console.log(`Connected to wallet: ${publicKey.toBase58()}`);
});

wallet.on("disconnect", () => {
  console.log("Wallet disconnected");
});

// Example: Send a transaction
export async function sendTransaction() {
  try {
    const connection = new Connection(clusterApiUrl("mainnet-beta"));
    const transaction = new Transaction().add(
      // Add instructions here
    );

    const { signature } = await wallet.sendTransaction(transaction, connection);
    console.log(`Transaction sent with signature: ${signature}`);
  } catch (error) {
    console.error("Error sending transaction:", error);
  }
}

// Connect wallet
wallet.connect();
