
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Plans } from '../pages/Plans';
import { Summary } from '../pages/Summary';

export const Navigation = () => {
    return (
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/planes" element={ <Plans /> } />
                <Route path="/resumen" element={ <Summary /> } />

                <Route path="/*" element={ <Navigate to="/home" replace /> } />
            </Routes>
        </BrowserRouter>

    )
}
