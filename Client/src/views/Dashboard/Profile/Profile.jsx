import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Img from "../../../componenets/ui/Img/Img";
import foto from "../../../assets/profile.jpg";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

import styles from "./profile.module.css";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const { adress } = user;

  const dispatch = useDispatch();

  const [modalType, setModalType] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <section className={styles.userDataChart}>
        <span className={styles.photo}>
          <Img img={foto} alt={user.firstName} />
        </span>
        <div className={styles.userCharts}>
          <article>
            <h3>Datos personales</h3>
            <span>
              <label>Nombre</label>
              <p>{user.firstName}</p>
            </span>
            <span>
              <label>Apellido</label>
              <p>{user.lastName}</p>
            </span>
            <span>
              <label>Documento de identidad</label>
              <p>{user.dni}</p>
            </span>
            <span>
              <label>Fecha de Nacimiento</label>
              <p>{user.birthday}</p>
            </span>
            <span>
              <label>Nacionalidad</label>
              <p>{user.nacionality}</p>
            </span>
            <PencilSquareIcon className={styles.icon} />
          </article>

          <article>
            <h3>Direccion de facturacion/entrega</h3>
            <span>
              <label>Pais</label>
              <p>{`${adress.country || 'Completar'}`}</p>
            </span>
            <span>
              <label>Estado/Provincia</label>
              <p>{`${adress.state || 'Completar'}`}</p>
            </span>
            <span>
              <label>Ciudad</label>
              <p>{`${adress.city || 'Completar'}`}</p>
            </span>
            <span>
              <label>Calle</label>
              <p>{`${adress.street || 'Completar'}`}</p>
            </span>
            <span>
              <label>Altura</label>
              <p>{`${adress.number || 'Completar'}`}</p>
            </span>
            <span>
              <label>Codigo Postal</label>
              <p>{`${adress.zipCOde || 'Completar'}`}</p>
            </span>
            <PencilSquareIcon className={styles.icon} />
          </article>
        </div>
      </section>
    </>
  );
};

export default Profile;
