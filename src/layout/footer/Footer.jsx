import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className="links">
        <a href="https://www.linkedin.com/in/elazar-durlacher-3bab15182/">
          <img src="../photos/linkedin.png" alt="" className={style.linkedin} />
        </a>
      </div>
      <div>Elazar Durlacher</div>
    </div>
  );
};

export default Footer;
