import { generateChallenge, authenticate } from "../lens/requests/profile";

export const authenticateAdress = async (signer, userAddress) => {
  const challengeResponse = await generateChallenge(userAddress?.address);
  const signature = await signer.signMessage(
    challengeResponse.data.challenge.text
  );
  const { data } = await authenticate(userAddress?.address, signature);
  const localStorage = window.localStorage;
  localStorage.setItem("auth_token", data.authenticate.accessToken);
};
