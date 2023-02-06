import { useState, useEffect } from "react";
import { useAccount, useSigner } from "wagmi";
import { Web3Storage } from "web3.storage";
import { Avatar, Button } from "@mui/material";
import { checkProfile } from "../lib/helpers/checkProfile";
import { createPost } from "../lib/lens/requests/tweet";
import { generateChallenge, authenticate } from "../lib/lens/requests/profile";
import styles from "../styles/TweetModal.module.css";

const TweetModal = ({ refetchPosts }) => {
  const [user, setUser] = useState({
    id: "",
    profile: "",
  });
  const [tweetText, setTweetText] = useState("");
  const [tweetFile, setTweetFile] = useState(null);
  const [tweetFilePreview, setTweetFilePreview] = useState("");
  const { data: userData } = useAccount();
  const { data: signer } = useSigner();
  const storageKey = process.env.NEXT_PUBLIC_STORAGE_KEY;
  const web3storage = new Web3Storage({ token: storageKey });

  const fetchData = async () => {
    //if (!userData?.address) return;
    //const { id, picture } = await checkProfile(userData?.address);
    //setUser({ ...user, id, profile: picture?.original?.url });
  };

  useEffect(() => {
    fetchData();
  }, [/*userData?.address*/]);

  const previewTweetImage = (e) => {
    const file = e.target.files[0];
    if (!file) return setTweetFilePreview("");
    const tweetImageUrl = URL.createObjectURL(file);
    setTweetFile(file);
    setTweetFilePreview(tweetImageUrl);
  };

  const createTweet = async (e) => {
    e.preventDefault();
    if ((!tweetText && tweetFile == null) || !userData) {
      return window.alert("No data filled or you're not logged in ");
    }

    const challengeResponse = await generateChallenge(userData?.address);
    const signature = await signer.signMessage(
      challengeResponse.data.challenge.text
    );
    const { data } = await authenticate(userData?.address, signature);
    const localStorage = window.localStorage;
    localStorage.setItem("auth_token", data.authenticate.accessToken);
    const blob = new Blob([JSON.stringify({ tweetText })], {
      type: "application/json",
    });
    const files = tweetFile
      ? [tweetFile[0], new File([blob], "metadata.json")]
      : [new File([blob], "metadata.json")];
    const cid = await web3storage.put(files);
    const createPostRequest = {
      profileId: user.id,
      contentURI: `https://ipfs.io/ipfs/${cid}`,
      collectModule: {
        freeCollectModule: {
          followerOnly: true,
        },
      },
      referenceModule: {
        followerOnlyReferenceModule: false,
      },
    };
    await createPost(createPostRequest);
    refetchPosts((state) => !state);
  };

  return (
    <div className={styles.tweetModal}>
      <form onSubmit={createTweet}>
        <div className={styles.input}>
          <Avatar src={user?.profile} />
          <textarea
            placeholder="What's happening?"
            onChange={(e) => setTweetText(e.target.value)}
          />
        </div>
        {tweetFilePreview && (
          <div className={styles.tweetImage}>
            <img src={tweetFilePreview} alt="tweet image" />
          </div>
        )}
        <section className={styles.bottom}>
          <input
            type="file"
            className={styles.inputImage}
            onChange={previewTweetImage}
          />
          <Button className={styles.tweetButton} type="submit">
            Tweet
          </Button>
        </section>
      </form>
    </div>
  );
};

export default TweetModal;
