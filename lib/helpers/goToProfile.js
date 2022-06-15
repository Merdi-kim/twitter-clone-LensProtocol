import router from "next/router";

export const goToProfile = (ownedBy) => {
  router.push({
    pathname: `/profile/${ownedBy}`,
    query: {
      ownedBy,
    },
  });
};
