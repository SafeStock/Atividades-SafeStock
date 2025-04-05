import style from '../layouts/LayoutSite.module.css'


function FooterSite() {

    function btnSubir() {

    }

    return (
        <>
            
            <section className={style.footerSite}>

                <div className={style.footer}>
                    
                <div className={style.txt1}>
                    <p>© 2025 <b><span class={style.txtbold}>Safe</span>Stock</b>. Todos os Direitos Reservados.</p>
                </div>

                <div className={style.txt2}>
                    <p>Política de Privacidade   |   Termos de Uso</p>
                </div>

                </div>

                <div className={style.btnFooter}>
                <button onClick={btnSubir} className={style.btnSubir}></button>
                </div>

            </section>
        
        </>
    )
}

export default FooterSite;