import Tags from "../../componentes/Tags";
import style from './Galeria.module.scss';
import Cards from "./Cards";

export default function Galeria() {
  return (
    <section className={style.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags />
      <Cards style={style}/>
    </section>
  )
}