import React from 'react'
import collectionJson from '../../data/personnal.json'
import artJson from '../../data/art.json'
import { Link } from 'react-router-dom'
import '../../style/collection.css'

function Collection() {
  document.querySelector('main')?.classList.remove('art');
  return (
    <>
      <ul className="collection">
        {collectionJson.personal.map((data, key) => {
            const singleArt = artJson.art.find(el=> el.id == data.artId)
            const img = require("../../assets/art/" + singleArt.img)
            const route = "/art/" + singleArt.id

          return (
              <li key={key}>
              <Link to={route} state={{ previousPath: window.location.pathname }}><img src={img} alt={singleArt.name} /></Link>
              </li>
          );
        })}
      </ul>
    </>
  );
}

export default Collection;