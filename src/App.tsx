import { useEffect, useState } from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
  fetch("/api/hello")
    .then((res) => res.json())
    .then((data) => setMessage(data.message))
    .catch((err) => console.error(err));
}, []);


  return (
    <div>
      <Header />
      <main style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>React + Express TypeScript Project</h1>
        <p>{message}</p>
      </main>
      <Footer />
    </div>
  );
};

export default App;
