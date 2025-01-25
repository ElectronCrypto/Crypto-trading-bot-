import { Connection, PublicKey } from "@solana/web3.js";

// Initialize Solana connection
const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");

// Function to track wallet balance
export async function trackWalletBalance(walletAddress: PublicKey) {
  try {
    const balance = await connection.getBalance(walletAddress);
    console.log(`Wallet ${walletAddress.toBase58()} balance: ${balance / 1e9} SOL`);
  } catch (error) {
    console.error("Error fetching wallet balance:", error);
  }
}

// Function to monitor transactions
export async function monitorWalletTransactions(walletAddress: PublicKey) {
  try {
    const subscriptionId = connection.onAccountChange(walletAddress, (accountInfo) => {
      console.log(`New transaction detected for wallet ${walletAddress.toBase58()}`);
      console.log("Account data:", accountInfo.data);
    });

    console.log(`Subscribed to wallet ${walletAddress.toBase58()} with subscription ID: ${subscriptionId}`);
  } catch (error) {
    console.error("Error monitoring wallet transactions:", error);
  }
}
