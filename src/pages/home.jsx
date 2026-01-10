import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import HeaderComp from "../componentes/header";
import "../stylesheets/Home.css";
import Resumen from "../componentes/resumen";
import { obtenerMobiliarios } from "../componentes/store/mobiliarios";

function Home() {
  const [mobiliarios, setMobiliarios] = useState([]);

  useEffect(() => {
    const mobs = obtenerMobiliarios();
    setMobiliarios(mobs);
  }, []);

  const totalMobiliario = mobiliarios.length;
  const enUsoSi = mobiliarios.filter(m => m.enUso === "Sí").length;
  const enUsoNo = mobiliarios.filter(m => m.enUso === "No").length;
  const inservibleMalo = mobiliarios.filter(
    m => m.estado === "Malo" || m.estado === "Inservible"
  ).length;
  const enMantenimiento = mobiliarios.filter(
    m => m.mantenimiento === "Sí"
  ).length;

  return (
    <>
      <HeaderComp />

      <main className="main-home">
        <div className="home">
          <h2>Bienvenido al Sistema de Inventario de Mobiliario - ULEAM</h2>

          <p>
            Este sistema permite registrar, consultar y administrar el
            inventario del mobiliario de la Universidad Laica Eloy Alfaro de
            Manabí (ULEAM). Actualmente, hay {totalMobiliario} mobiliarios
            registrados.
          </p>

          <p>Desde aquí puedes acceder al módulo de inventario.</p>

          <Link to="/inventario" className="btn-inventario">
            Ir al Inventario
          </Link>
        </div>

        <div className="dashboard">
          <h1>Resumen del inventario</h1>

          <Resumen titulo="Total de Mobiliario" valor={totalMobiliario} />
          <Resumen titulo="Mobiliario en Uso (SI)" valor={enUsoSi} />
          <Resumen titulo="Mobiliario en Uso (NO)" valor={enUsoNo} />
          <Resumen
            titulo="Mobiliario Inservible (MALO)"
            valor={inservibleMalo}
          />
          <Resumen
            titulo="Mobiliario en Mantenimiento"
            valor={enMantenimiento}
          />
        </div>
      </main>
    </>
  );
}

export default Home;
