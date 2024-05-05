export const clueAddress = (address: string) =>
  `${address?.slice(0, 5)}...${address?.slice(-4)}`;
