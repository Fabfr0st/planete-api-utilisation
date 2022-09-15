import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
          <Link to={`/planete/${planete.id}`} key={planete.id}>
            <div className="container">
              <h2>{planete.nom}</h2>
              <div>
                <img src={planete.image} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
