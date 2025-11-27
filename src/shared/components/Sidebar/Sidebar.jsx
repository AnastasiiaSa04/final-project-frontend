import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Sidebar.module.css";

import logo from "../../../assets/images/ICHGRA5.png";
import home from "../../../assets/icons/home.png";
import homeNotClicked from "../../../assets/icons/homeNotClicked.png";
import search from "../../../assets/icons/search.png";
import searchClicked from "../../../assets/icons/searchClicked.png";
import explore from "../../../assets/icons/explore.png";
import messenger from "../../../assets/icons/messenger.png";
import notification from "../../../assets/icons/notification.png";
import notificationClicked from "../../../assets/icons/notificationClicked.png";
import create from "../../../assets/icons/create.png";
import profile from "../../../assets/icons/profile.png";
import close from "../../../assets/icons/close.png";
import avatar from "../../../assets/images/avatar.png";
import postLikeNotification from "../../../assets/images/postLikeNotification.png";

const Sidebar = () => {
  const [active, setActive] = useState("home");
  const [activeModal, setActiveModal] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const closeModal = () => {
    setActiveModal(null);
    if (active === "search") setActive("home");
    setSearchValue("");
  };

  const clearSearchInput = () => {
    setSearchValue("");
  };

  const openModal = (name) => {
    setActive(name);
    setActiveModal(name);
  };

  return (
    <>
      <div className={styles.sidebar}>
        <img src={logo} alt="logo" className={styles.logoTop} />

        <nav className={styles.sidebarMenu}>
          <button
            className={`${styles.sidebarMenuLink} ${active === "home" ? styles.active : ""}`}
            onClick={() => {
              (setActive("home"), navigate("/"));
            }}
          >
            <img
              src={active === "home" ? home : homeNotClicked}
              alt="home"
              className={styles.icon}
            />
            <span>Home</span>
          </button>

          <button
            className={`${styles.sidebarMenuLink} ${active === "search" ? styles.active : ""}`}
            onClick={() => openModal("search")}
          >
            <img
              src={active === "search" ? searchClicked : search}
              alt="search"
              className={styles.icon}
            />
            <span>Search</span>
          </button>

          <button
            className={`${styles.sidebarMenuLink} ${active === "explore" ? styles.active : ""}`}
            onClick={() => {
              setActive("explore");
              navigate("/explore");
            }}
          >
            <img src={explore} alt="explore" className={styles.icon} />
            <span>Explore</span>
          </button>

          <button
            className={`${styles.sidebarMenuLink} ${active === "messages" ? styles.active : ""}`}
          >
            <img src={messenger} alt="messages" className={styles.icon} />
            <span>Messages</span>
          </button>

          <button
            className={`${styles.sidebarMenuLink} ${active === "notifications" ? styles.active : ""}`}
            onClick={() => openModal("notifications")}
          >
            <img
              src={
                active === "notifications" ? notificationClicked : notification
              }
              alt="notifications"
              className={styles.icon}
            />
            <span>Notifications</span>
          </button>

          <button
            className={`${styles.sidebarMenuLink} ${active === "create" ? styles.active : ""}`}
          >
            <img src={create} alt="create" className={styles.icon} />
            <span>Create</span>
          </button>

          <button
            className={`${styles.sideBarMenuLinkProfile} ${active === "profile" ? styles.active : ""}`}
          >
            <img src={profile} alt="profile" className={styles.icon} />
            <span>Profile</span>
          </button>
        </nav>
      </div>

      {activeModal && (
        <>
          <div className={styles.modalBackground} onClick={closeModal}></div>

          <div
            className={styles.modalOverlay}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalContent}>
              <h2>{activeModal[0].toUpperCase() + activeModal.slice(1)}</h2>

              {activeModal === "search" && (
                <>
                  <div className={styles.searchInputWrapper}>
                    <input
                      className={styles.inputSearch}
                      type="text"
                      placeholder="Search"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <img
                      className={styles.clearInput}
                      src={close}
                      alt="clear"
                      onClick={clearSearchInput}
                    />
                  </div>

                  <p className={styles.recent}>Recent</p>
                  <div className={styles.usersList}>
                    <img src={avatar} alt="avatar" className={styles.avatar} />
                    <p>sashaa</p>
                  </div>
                </>
              )}

              {activeModal === "notifications" && (
                <div className={styles.notificationWrapper}>
                  <h3>New</h3>
                  <ul className={styles.notificationsList}>
                    <li className={styles.notificationItem}>
                      <img
                        src={avatar}
                        alt="avatar"
                        className={styles.avatar}
                      />
                      <div className={styles.notificationText}>
                        <p>
                          <strong>sashaa</strong> liked your photo.
                        </p>
                        <p className={styles.timeText}>2 d</p>
                      </div>
                      <img
                        src={postLikeNotification}
                        alt="post"
                        className={styles.postLikeNotification}
                      />
                    </li>

                    <li className={styles.notificationItem}>
                      <img
                        src={avatar}
                        alt="avatar"
                        className={styles.avatar}
                      />
                      <div className={styles.notificationText}>
                        <p>
                          <strong>sashaa</strong> commented your photo
                        </p>
                        <p className={styles.timeText}>2 wek</p>
                      </div>
                      <img
                        src={postLikeNotification}
                        alt="post"
                        className={styles.postLikeNotification}
                      />
                    </li>
                  </ul>
                </div>
              )}

              {activeModal !== "search" && activeModal !== "notifications" && (
                <button onClick={closeModal}>Close</button>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Sidebar;
