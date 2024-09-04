
import { useContext, useState } from 'react'
import MainLayout from '../components/ui/MainLayout'
import AuthContext from '../context/auth/AuthContext'
import { Steps } from '../components/plan/Steps';
import { PlansOptions } from '../components/plan/PlansOptions';
import { PlansList } from '../components/plan/PlansList';

export const Plans = () => {

    const { auth } = useContext(AuthContext);
    const [ selectedUserPlan, setSelectedUserPlan ] = useState('');

    return (
        <MainLayout>
            
            <Steps step={1} />
            <section id="plans" className="plans">
                <div>
                    <div className="plans__about">
                        <h1 className="plans__title">{auth.name} ¿Para quién deseas cotizar?</h1>
                        <p className="plans__description">Selecciona la opción que se ajuste más a tus necesidades.</p>
                    </div>

                    <PlansOptions setSelectedUserPlan={setSelectedUserPlan} />
                    <PlansList user={auth} selectedUserPlan={selectedUserPlan} />
                </div>

            </section>

        </MainLayout>
    )

}