import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Planete() {
  const { planeteId } = useParams();
  const [planete, SetPlanete] = useState({});

  useEffect(() => {
    fetch(`http://localhost:7500/planete/${planeteId}`).then((response) => {
      response.json().then((data) => SetPlanete(data));
    });
  }, []);

  return (
    <>
      <h1>Une planète choisie {planeteId}</h1>
      <div className="tousArticles">
        <div className="container" key={planete.id}>
          <h2>{planete.nom}</h2>
          <div>
            <img src={planete.image} />
            <p>{planete.created_at}</p>
          </div>
        </div>
      </div>
    </>
  );
}
