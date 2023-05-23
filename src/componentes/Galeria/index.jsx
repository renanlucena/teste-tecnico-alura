import React, { useState } from "react";
import Tags from "../../componentes/Tags";
import style from './Galeria.module.scss';
import Cards from "./Cards";
import fotos from './fotos.json';

export default function Galeria() {
  const [itens, setItens] = useState(fotos);
  const tags = [...new Set(fotos.map((valor) => valor.tag))];

  const filtrarFotos = (tag) => {
    const novasFotos = fotos.filter(foto => {
      return foto.tag === tag;
    })

    setItens(novasFotos);
  }
  return (
    <section className={style.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags filtrarFotos={filtrarFotos} tags={tags} setItens={setItens}/>
      <Cards itens={itens} style={style}/>
    </section>
  )
}