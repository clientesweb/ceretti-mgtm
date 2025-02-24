import Footer from "@/components/footer";
import PageIntro from "@/components/page-intro";
import ProductsFeatured from "@/components/products-featured";
import Subscribe from "@/components/subscribe";

import Layout from "../layouts/Main";

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      <section className="featured">
        <div className="container">
          <article
            style={{ backgroundImage: "url(/images/instagram.jpg)" }}
            className="featured-item featured-item-large"
          >
            <div className="featured-item__content">
              <h3>Instagram</h3>
              <a href="#" className="btn btn--rounded">
                Hasta 30% OFF
              </a>
            </div>
          </article>

          <article
            style={{ backgroundImage: "url(/images/youtube.jpg)" }}
            className="featured-item featured-item-small-first"
          >
            <div className="featured-item__content">
              <h3>YouTube</h3>
              <a href="#" className="btn btn--rounded">
                Hasta 20% OFF
              </a>
            </div>
          </article>

          <article
            style={{ backgroundImage: "url(/images/facebook.jpg)" }}
            className="featured-item featured-item-small"
          >
            <div className="featured-item__content">
              <h3>Sale this summer</h3>
              <a href="#" className="btn btn--rounded">
                Hasta un 50% OFF
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Porque elegir Ceratti como tu Aliado?</h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <i className="icon-shipping" />
              <div className="data-item__content">
                <h4>Eficacia Garantizada</h4>
                <p>
                  +23.000 Ordenes entregadas
                  Atención 24/7.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-payment" />
              <div className="data-item__content">
                <h4>PAGO SEGURO</h4>
                <p>
                  Todos los pagos se procesan instantáneamente a través de un pago 
                  seguro.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-cash" />
              <div className="data-item__content">
                <h4>Servicios100% seguros </h4>
                <p>
                  Sin baneos
ni tampoco 
                  shadow-bans
                </p>
              </div>
            </li>

            <li>
              <i className="icon-materials" />
              <div className="data-item__content">
                <h4>GARANTÍA EXTENDIDA</h4>
                <p>
                  Servicios estables y
                  garantizados
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <ProductsFeatured />
      <Subscribe />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
