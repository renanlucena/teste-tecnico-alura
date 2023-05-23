import Tags from "../../componentes/Tags";
import style from './Galeria.module.scss';
import fotos from './fotos.json';
import open from './open.png';
import favorito from './favorito.png'

export default function Galeria() {
  return (
    <section className={style.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags />
      <ul className={style.galeria__cards}>
        {fotos.map((foto) => {
          return (
            <li key={foto.id} className={style.galeria__card}>
              <img
                className={style.galeria__imagem}
                src={foto.imagem}
                alt={foto.titulo}
              />
              <p className={style.galeria__descricao}>{foto.titulo}</p>
              <div>
                <p>{foto.creditos}</p>
                <span>
                  <img src={favorito} alt="ícone coração de curtir" />
                  <img src={open} alt="ícone de abrir modal" />
                </span>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}