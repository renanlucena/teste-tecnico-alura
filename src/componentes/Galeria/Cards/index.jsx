import React from "react";
import Card from "./Card";
import itens from './fotos.json';

export default function Cards({ style }) {
  return (
    <ul className={style.galeria__cards}>
      {itens.map((item) => {
        return <Card key={item.id} item={item} style={style} />;
      })}
    </ul>
  );
}