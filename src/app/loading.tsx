import { Layout } from "./_components/Layout/Layout";
import styles from "./HomeLoading.module.css";
import "./globals.css";

export default function Loading() {
  return (
    <Layout maxWidth={750}>
      <div className={styles.searchBarSkeleton}></div>
      <div className={styles.gridSkeleton}>
        <div className={styles.cardSkeleton}></div>
        <div className={styles.cardSkeleton}></div>
        <div className={styles.cardSkeleton}></div>
        <div className={styles.cardSkeleton}></div>
        <div className={styles.cardSkeleton}></div>
        <div className={styles.cardSkeleton}></div>
        <div className={styles.cardSkeleton}></div>
        <div className={styles.cardSkeleton}></div>
        <div className={styles.cardSkeleton}></div>
      </div>
    </Layout>
  );
}
