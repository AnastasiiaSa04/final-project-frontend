import styles from "./ExplorePage.module.css";

import post1 from "../../assets/images/post1.png";
import post2 from "../../assets/images/post2.png";

const randomPosts = [
  { id: 1, img: post1 },
  { id: 1, img: post1 },
  { id: 1, img: post1 },
  { id: 2, img: post2 },
  { id: 1, img: post1 },
  { id: 1, img: post1 },
  { id: 1, img: post1 },
  { id: 2, img: post2 },
];

const ExplorePage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.postsGrid}>
        {randomPosts.map((post) => (
          <div className={styles.postCard}>
            <img src={post.img} alt="post" className={styles.postImg} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;
