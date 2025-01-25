import axios from "axios";

// Function to fetch swap routes from Jupiter API
export async function getSwapRoutes(inputMint: string, outputMint: string, amount: number) {
  try {
    const url = `https://quote-api.jup.ag/v1/quote?inputMint=${inputMint}&outputMint=${outputMint}&amount=${amount}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching swap routes:", error);
    throw error;
  }
}

// Function to execute a swap
export async function executeSwap(route: any, wallet: any) {
  try {
    const url = "https://quote-api.jup.ag/v1/swap";
    const response = await axios.post(url, {
      route,
      wallet: wallet.publicKey.toBase58(),
    });
    return response.data;
  } catch (error) {
    console.error("Error executing swap:", error);
    throw error;
  }
}
