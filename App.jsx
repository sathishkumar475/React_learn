import Content from "./component/Content";
import Footer from "./component/Footer";
import Header from "./component/Header";

let name = "SATHISH";

function App() {
  return (
    <div className="app">
      <Header user={name} />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
