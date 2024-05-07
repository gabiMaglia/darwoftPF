import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProfileNav from "./ProfileNav/ProfileNav";
import Img from "../../componenets/ui/Img/Img";
import foto from "../../assets/profile.png";
import {PencilSquareIcon} from '@heroicons/react/24/outline'
import styles from "./profile.module.css";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const { adress } = user;

  const dispatch = useDispatch();

  const [modalType, setModalType] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  return (
    <>
      <ProfileNav />
      <section className={styles.userDataChart}>

        <span className={styles.photo}>
        <figure className={styles.frame}>
          <Img img={foto} alt="Gabriel"/>
          </figure>
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
            <PencilSquareIcon className={styles.icon}/>
          </article>

          <article>
            <h3>Direccion de facturacion/entrega</h3>
            <span>
              <label>Pais</label>
              <p>{adress.country}</p>
            </span>
            <span>
              <label>Estado/Provincia</label>
              <p>{adress.state}</p>
            </span>
            <span>
              <label>Ciudad</label>
              <p>{adress.city}</p>
            </span>
            <span>
              <label>Calle</label>
              <p>{adress.stret}</p>
            </span>
            <span>
              <label>Altura</label>
              <p>{adress.number}</p>
            </span>
            <span>
              <label>Codigo Postal</label>
              <p>{adress.zipCode}</p>
            </span>
            <PencilSquareIcon className={styles.icon}/>
          </article>
        </div>
      </section>
    </>
  );
};

export default Profile;
