import { useState } from "react";
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

const Sidebar = () => {
  const [active, setActive] = useState("home");
  const [activeModal, setActiveModal] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const closeModal = () => {
    setActiveModal(null);
    if (active === "search") setActive("home");
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
            className={styles.sidebarMenuLink}
            onClick={() => setActive("home")}
          >
            <img
              src={active === "home" ? home : homeNotClicked}
              alt="home"
              className={styles.icon}
            />
            <span>Home</span>
          </button>

          <button
            className={styles.sidebarMenuLink}
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
            className={styles.sidebarMenuLink}
            onClick={() => openModal("explore")}
          >
            <img src={explore} alt="explore" className={styles.icon} />
            <span>Explore</span>
          </button>

          <button
            className={styles.sidebarMenuLink}
            onClick={() => openModal("messages")}
          >
            <img src={messenger} alt="messages" className={styles.icon} />
            <span>Messages</span>
          </button>

          <button
            className={styles.sidebarMenuLink}
            onClick={() => openModal("notifications")}
          >
            <img
              src={
                active === "notifications"
                  ? notificationClicked
                  : notification
              }
              alt="notifications"
              className={styles.icon}
            />
            <span>Notifications</span>
          </button>

          <button
            className={styles.sidebarMenuLink}
            onClick={() => openModal("create")}
          >
            <img src={create} alt="create" className={styles.icon} />
            <span>Create</span>
          </button>

          <button
            className={styles.sideBarMenuLinkProfile}
            onClick={() => openModal("profile")}
          >
            <img src={profile} alt="profile" className={styles.icon} />
            <span>Profile</span>
          </button>
        </nav>
      </div>

      {/* Модалки */}
      {activeModal && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
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
                    alt="close"
                    onClick={closeModal}
                  />
                </div>

                <p>Recent</p>
                <div className={styles.usersList}>
                  <img src={avatar} alt="avatar" className={styles.avatar} />
                  <p>sashaa</p>
                </div>
              </>
            )}

            {activeModal !== "search" && <button onClick={closeModal}>Close</button>}
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;

