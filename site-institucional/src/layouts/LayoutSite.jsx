
import logo from "../assets/logoNome.png"
import style from '../layouts/LayoutSite.module.css'


function NavBar() {
    return (
        <>
            <section className={style.navBar}>

                <div className={style.containerLogo}>
                    <img src={logo} className={style.logo} alt="logo safeStock" />
                </div>

                <div className={style.conteudoNav}>

                    <ul>
                        <li className={style.Home}>Home</li>
                        <li>Por que SafeStock</li>
                        <li>Serviços</li>
                        <li>Contate-nos</li>
                    </ul>

                </div>

            </section>
          
         \
        </>
    )
}

export default NavBar;