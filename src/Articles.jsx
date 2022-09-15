import { useEffect, useState } from "react";
import "./Articles.css";

export default function Articles() {
  const [Articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7500/planetes").then((response) =>
      response.json().then((data) => setArticles(data))
    );
  }, []);

  return (
    <>
      <h1>Articles</h1>
      <div className="tousArticles">
        {Articles.map((planete) => (
          <div className="container" key={planete.id}>
            <h2>{planete.nom}</h2>
            <div>
              <img src={planete.image} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
