import style from "./Home.module.scss";
const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.wrap}>
        <h1 className={style.title}>
          ברוכים הבאים לאתר
          <br />
          הכל על הנייר
        </h1>
        <h3 className={style.secondTitle}>
          הבית הישראלי לסטטיסטיקות מתקדמות בכדורסל
        </h3>
      </div>
    </div>
  );
};

export default Home;
