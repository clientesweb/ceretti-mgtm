import Logo from "../../assets/icons/logo";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6>
              <Logo /> <span>CERETTI</span>-MGTM
            </h6>
            <p>
              Impulsa tu presencia en redes sociales con nuestra estrategia profesional. Compra seguidores, vistas y likes para Instagram y haz crecer tu marca. 🚀✨
            </p>
            <ul className="site-footer__social-networks">
              <li>
                <a href="#">
                  <i className="icon-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-linkedin" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-youtube-play" />
                </a>
              </li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Compra online</li>
              <li>
                <a href="#">Mi orden</a>
              </li>
              <li>
                <a href="#">Envío y entrega</a>
              </li>
              <li>
                <a href="#">Devoluciones</a>
              </li>
              <li>
                <a href="#">Opciones de pago</a>
              </li>
              <li>
                <a href="#">Contáctanos</a>
              </li>
            </ul>
            <ul>
              <li>Información</li>
              <li>
                <a href="#">Promociones</a>
              </li>
              <li>
                <a href="#">Tienda</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
              <li>
                <a href="#">Hazte miembro</a>
              </li>
              <li>
                <a href="#">Sitio feedback</a>
              </li>
            </ul>
            <ul>
              <li>Contacto</li>
              <li>
                <a href="#">store@cerettimgtn.com</a>
              </li>
              <li>
                <a href="#">WhatsApp: +1 123 138 138</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>Powered By Duality Domain - © 2015. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
