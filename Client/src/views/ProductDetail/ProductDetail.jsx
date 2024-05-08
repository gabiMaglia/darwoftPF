import { useParams } from "react-router-dom";
import ProductThumbnails from "./Thumbnails/ProductThumbnails";

import styles from "./productDetail.module.css";

const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <section>
      <div>
        <article><ProductThumbnails /></article>
        <article>
          GRUPO/CATEGORIA
          <h1>Nombre del Producto</h1>
          <div>
            {/* box del precio */}
            <div>
              <span>
                <p>Contado</p>
                <b>ARS 1000</b>
              </span>
              <span>
                <p>Debito</p>
                <b>ARS 3000</b>
              </span>
              <span>
                <p>6 cuotas de</p>
                <b>ARS 900</b>
              </span>
            </div>
            <div>{/* fav y agregar al carrito */}</div>
          </div>
          <div>tabla de especificaciones</div>
          {/* TITULO PRECIO ESPECIFICACIONES */}
        </article>
      </div>
      <div>
        <article>
          {/* Descripcion */}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
          consectetur veritatis explicabo, illum, debitis maiores blanditiis
          tempore, asperiores ducimus nobis odio necessitatibus? Qui, natus
          voluptas quo doloremque praesentium voluptate dolore.
        </article>
      </div>
      <article>{/* productos relacionados */}</article>
    </section>
  );
};

export default ProductDetail;
