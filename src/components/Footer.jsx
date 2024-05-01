import './Footer.css'

const Footer = () => {
    return(
        <div className="footer-container">
            <div className="box-left">
                <div className='footer-atendimento'>
                    <h1>Atendimento</h1>
                    <p>Vendas/Troca</p>
                    <p>contato@gmail.com</p>
                    <p>Fale conosco</p>
                </div>

                <div className='footer-institucional'>
                    <h1>Institucional</h1>
                    <p>Nossas lojas</p>
                    <p>Quem somos</p>
                    <p>Compre no atacado</p>
                </div>
            </div>

            <div className="box-right">
                <div className="cadastrese">
                    <h1>Cadastre-se no site</h1>
                    <input placeholder='example@gmail.com' type="text" name="" id="" />
                    <button>Enviar email</button>
                </div>
            </div>
        </div>
    )
}

export default Footer