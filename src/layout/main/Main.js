import "./Main.css";
import Counter from "../../components/counter/Counter";

const Main = () => {
  return (
    <main className="main">
      <section className="counter-section p-5">
        <Counter />
      </section>
    </main>
  );
};

export default Main;
