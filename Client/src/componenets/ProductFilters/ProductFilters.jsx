import { capitalizeFirstLetter } from "../../utils/strings";
import styles from "./productFilters.module.css";
const grupos = ["electronica", "celulares", "computacion", "varios"];
const categorias = [
  "Audio y Video",
  "Cámaras y Fotografía",
  "Componentes Electrónicos",
  "TVs y Home Theaters",
  "Drones y Accesorios",
  "Smartphones",
  "Accesorios para Celulares",
  "Repuestos para Celulares",
  "Smartwatches",
  "Fundas y Protectores",
  "Laptops y Accesorios",
  "Desktops y Monitores",
  "Almacenamiento",
  "Periféricos y Accesorios",
  "Redes y Conectividad",
  "Electrodomésticos",
  "Herramientas",
  "Artículos de Oficina",
  "Juguetes Tecnológicos",
  "Iluminación",
];
const marcas = [
  "Sony",
  "Panasonic",
  "Samsung",
  "LG",
  "Bose",
  "Apple",
  "Huawei",
  "Xiaomi",
  "Motorola",
  "Dell",
  "HP",
  "Asus",
  "Lenovo",
  "Philips",
  "Bosch",
  "Black+Decker",
  "Dyson",
  "General Electric",
  "Acer",
  "Microsoft",
  "Intel",
  "AMD",
  "Nvidia",
  "Canon",
  "Nikon",
  "GoPro",
  "Olympus",
  "Fujifilm",
  "OnePlus",
  "Realme",
  "Oppo",
  "Vivo",
  "Tecno",
  "Makita",
  "DeWalt",
  "Stanley",
  "Siemens",
  "Whirlpool",
  "JBL",
  "Harman Kardon",
  "Pioneer",
  "Yamaha",
  "Beats",
];

const ProductFilters = () => {
  return (
    <>
      <div className={styles.filterBox}>
        <h2>Filtros</h2>
        <span>
          
          <h3>Grupo</h3>
          <ul>
            {grupos.map((e) => (
              <li key={Math.random()}>{capitalizeFirstLetter(e)}</li>
            ))}
          </ul>
        </span>
        <span>
          
          <h3>Categoria</h3>
          <ul>
            {categorias.map((e) => (
              <li key={Math.random()}>{capitalizeFirstLetter(e)}</li>
            ))}
          </ul>
        </span>

        <span>
          <h3>Marcas</h3>
          <ul>
            {marcas.map((e) => (
              <li key={Math.random()}>{capitalizeFirstLetter(e)}</li>
            ))}
          </ul>
        </span>
      </div>
    </>
  );
};

export default ProductFilters;
