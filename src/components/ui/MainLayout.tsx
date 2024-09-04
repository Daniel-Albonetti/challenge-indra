
import { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface Props {
    children: ReactNode
    isHome?: boolean
}

const MainLayout = ({ children, isHome=false }: Props) => {

    return (
        <div className={`mainLayout ${isHome ? "baseLayout--gradient": "baseLayout--normal"}`}>
            <Header />
                { children }
            <Footer />
        </div>
    )

}

export default MainLayout