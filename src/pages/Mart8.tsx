import { Link } from "react-router-dom";

const Mart8 = () => {
  return (
    <>
      <header id="header"></header>
      <section className="section">
        <aside id="aside"></aside>
        <main id="main">
          <h1>
            Идеальное 8 марта
            <br />
            для меня
          </h1>
          <p></p>
          <p></p>
          <Link to="/flwrs">
            <button id="button1">
              <i>Цветочки</i>
            </button>
          </Link>
          <p></p>
          <Link to="/strike">
            <button id="button1">
              <i>Приятности</i>
            </button>
          </Link>
          <p></p>
          <Link to="/free">
            <button id="button1">
              <i>Бесценно</i>
            </button>
          </Link>
        </main>
        <aside id="aside2"></aside>
      </section>
      <footer id="footer"></footer>
    </>
  );
};

export default Mart8;
