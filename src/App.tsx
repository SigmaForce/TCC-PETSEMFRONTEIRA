import "./css/main.css";

function App() {
  return (
    <>
      <section className="container p-0">
        <div className="row p-0">
          <div className="grid-8">
            <ul className="flex flex-space">
              <li>
                <img src="" alt="" />
              </li>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">How to Help</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="container p-0 ">
        <div className="row">
          <div className="grid-6 bg-primary">
            <strong>
              Não Compre <span>Adote</span>
            </strong>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
              risus, in enim semper. Luctus facilisi neque porttitor ullamcorper
              scelerisque gravida venenatis lectus neque.
            </span>
          </div>
          <div className="grid-6 bg-secondary">
            <img src="" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
