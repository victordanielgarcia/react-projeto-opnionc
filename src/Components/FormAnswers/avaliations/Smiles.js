import React, { useEffect, useState } from "react";

import angry from "../../../Assets/ANGRY.png";
import happy from "../../../Assets/HAPPY.png";
import indiferent from "../../../Assets/INDIFERENT.png";
import sad from "../../../Assets/SAD.png";
import veryHappy from "../../../Assets/VERY HAPPY.png";

function Smiles(props) {
  const { index, indexItem, title, handleEditAnswerQuantitativo } = props;

  const [ratingStatus, setRatingStatus] = useState({ ratio: 0, active: false });
  const [rating, setRating] = useState([
    { S: false },
    { S: false },
    { S: false },
    { S: false },
    { S: false },
  ]);

  function handleRating(over, ratio) {
    if (over) {
      setRating(
        rating.map((star, index) => {
          if (index === ratio - 1) {
            return { S: true };
          }
          return star;
        }),
      );
    } else {
      setRating(
        rating.map((star, index) => {
          if (index === ratio - 1) {
            return { S: false };
          }
          return star;
        }),
      );
    }
  }

  useEffect(() => {
    setRatingStatus({ ratio: 0, active: false });
  }, []);

  return (
    <div className="p-p-3 formAnswers-item">
      <div className="p-d-flex p-as-center">
        <div className="p-d-flex p-as-center">
          <h3>
            {index + 1})&nbsp;{title}
          </h3>
        </div>
      </div>
      <div id="rating">
        <span
          className={`${
            ratingStatus.active && ratingStatus.ratio === 1
              ? "rating-in"
              : rating[0].S && "rating-in"
          }`}
          onMouseOver={() => {
            handleRating(true, 1);
          }}
          onClick={() =>
            setRatingStatus({
              ratio: 1,
              active: !ratingStatus.active ? true : ratingStatus.ratio !== 1,
            }) | handleEditAnswerQuantitativo(indexItem, 1)
          }
          onMouseOut={() => {
            handleRating(false, 1);
          }}
        >
          <img className="p-mx-2 researches-smiles" src={angry} alt="Imagem" />
        </span>
        <span
          className={`${
            ratingStatus.active && ratingStatus.ratio === 2
              ? "rating-in"
              : rating[1].S && "rating-in"
          }`}
          onMouseOver={() => {
            handleRating(true, 2);
          }}
          onClick={() =>
            setRatingStatus({
              ratio: 2,
              active: !ratingStatus.active ? true : ratingStatus.ratio !== 2,
            }) | handleEditAnswerQuantitativo(indexItem, 2)
          }
          onMouseOut={() => {
            handleRating(false, 2);
          }}
        >
          <img className="p-mx-2 researches-smiles" src={sad} alt="Imagem" />
        </span>
        <span
          className={`${
            ratingStatus.active && ratingStatus.ratio === 3
              ? "rating-in"
              : rating[2].S && "rating-in"
          }`}
          onMouseOver={() => {
            handleRating(true, 3);
          }}
          onClick={() =>
            setRatingStatus({
              ratio: 3,
              active: !ratingStatus.active ? true : ratingStatus.ratio !== 3,
            }) | handleEditAnswerQuantitativo(indexItem, 3)
          }
          onMouseOut={() => {
            handleRating(false, 3);
          }}
        >
          <img
            className="p-mx-2 researches-smiles"
            src={indiferent}
            alt="Imagem"
          />
        </span>
        <span
          className={`${
            ratingStatus.active && ratingStatus.ratio === 4
              ? "rating-in"
              : rating[3].S && "rating-in"
          }`}
          onMouseOver={() => {
            handleRating(true, 4);
          }}
          onClick={() =>
            setRatingStatus({
              ratio: 4,
              active: !ratingStatus.active ? true : ratingStatus.ratio !== 4,
            }) | handleEditAnswerQuantitativo(indexItem, 4)
          }
          onMouseOut={() => {
            handleRating(false, 4);
          }}
        >
          <img className="p-mx-2 researches-smiles" src={happy} alt="Imagem" />
        </span>
        <span
          className={`${
            ratingStatus.active && ratingStatus.ratio === 5
              ? "rating-in"
              : rating[4].S && "rating-in"
          }`}
          onMouseOver={() => {
            handleRating(true, 5);
          }}
          onClick={() =>
            setRatingStatus({
              ratio: 5,
              active: !ratingStatus.active ? true : ratingStatus.ratio !== 5,
            }) | handleEditAnswerQuantitativo(indexItem, 5)
          }
          onMouseOut={() => {
            handleRating(false, 5);
          }}
        >
          <img
            className="p-mx-2 researches-smiles"
            src={veryHappy}
            alt="Imagem"
          />
        </span>
      </div>
    </div>
  );
}

export default Smiles;
