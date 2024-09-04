import { Steps } from "../components/plan/Steps"
import MainLayout from "../components/ui/MainLayout"

import FamilyIcon from '../assets/img/IconFamily.png';
import { useContext } from "react";
import AuthContext from "../context/auth/AuthContext";
import PlanContext from "../context/plan/PlanContext";

export const Summary = () => {

    const { auth: { name, lastName, document, documentNumber, cellphone } } = useContext(AuthContext)
    const { plan: { name: planType, price } } = useContext(PlanContext)

    return (
        <MainLayout>
            
            <Steps step={2} />
            <section id="summary" className="summary">
                <div>
                    <div className="summary__content">
                        <h1 className="summary__title">Resumen del seguro</h1>
                        <div className="card card--noHover">
                            <div>
                                <p className="summary__subject">PRECIOS CALCULADOS PARA:</p>
                                <div className="summary__user"><img src={FamilyIcon} alt="icono user" className='summary__icon' />
                                    <span>{name} {lastName}</span>
                                </div>
                            </div>
                            <div className="summary__description">
                                <div >
                                    <h4>Responsable de pago</h4>
                                    <p>{document === 1 ? "DNI" : "CE"}: {documentNumber}</p>
                                    <p>Celular: {cellphone}</p>
                                </div>
                                <div>
                                    <h4>Plan elegido</h4>
                                    <p>{planType}</p>
                                    <p>Costo del Plan: {`$${price}`} al mes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </MainLayout>
    )

}