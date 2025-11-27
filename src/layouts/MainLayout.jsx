import Sidebar from "../shared/components/Sidebar/Sidebar";
import styles from "./MainLayout.module.css";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />

      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
