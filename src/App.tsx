
import './styles/css/App.css'
import { Navigation } from './routes/Navigation';
import AuthState from './context/auth/AuthState';
import PlanState from './context/plan/PlanState';

function App() {

    return (
        <>
            <AuthState>
                <PlanState>
                    <Navigation />
                </PlanState>
            </AuthState>
        </>
    );

}

export default App;
