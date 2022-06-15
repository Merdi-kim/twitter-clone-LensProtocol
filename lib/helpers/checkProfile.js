import { getProfiles } from "../lens/requests/profile";
import Router from "next/router";

export const checkProfile = async (address) => {
  const { data: profiles } = await getProfiles(address);

  if (profiles?.profiles?.items.length == 0) {
    return Router.push("/signin");
  }
  const { id, handle, picture } = profiles?.profiles?.items[0];
  return {
    id,
    handle,
    picture,
  };
};
