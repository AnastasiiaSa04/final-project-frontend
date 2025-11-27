import Sidebar from "../../shared/components/Sidebar/Sidebar";
import Footer from "../../shared/components/Footer/Footer";
import styles from "./mainPage.module.css";

import instaStorie from "../../assets/icons/instaStorie.png";
import punkt from "../../assets/icons/punkt.png";
import postExample from "../../assets/images/postExample.png";
import like from "../../assets/icons/notification.png";
import comment from "../../assets/icons/comment.png";
import updates from "../../assets/images/allUpdates.png";

const fakePosts = [1, 2, 3, 4];

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div>
        <div className={styles.content}>
          <div className={styles.postsGrid}>
            {fakePosts.map((item) => (
              <div key={item} className={styles.postCard}>
                <div className={styles.postHeader}>
                  <img src={instaStorie} alt="storie" />
                  <p>sashaa</p>
                  <img src={punkt} alt="punkt" />
                  <p>2 wek</p>
                  <img src={punkt} alt="punkt" />
                  <button className={styles.follow}>Follow</button>
                </div>

                <img src={postExample} alt="post" className={styles.postImg} />

                <div className={styles.postActions}>
                  <img src={like} alt="like" />
                  <img src={comment} alt="comment" />
                </div>

                <p>101 824 likes</p>
                <h6>Sashaa</h6>
                <p>𝘐𝘵’𝘴 𝒈𝒐𝒍𝒅𝒆𝒏, 𝘗𝘰𝘯𝘺𝘣𝘰𝘺!</p>
                <p>heyyyyy | </p>
                <p>View all comments (732)</p>
              </div>
            ))}
          </div>
          <div className={styles.updates}>
            <img src={updates} alt="updates" />
            <p>You've seen all the updates</p>
            <p>You have viewed all new publications</p>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
