import Head from 'next/head'
import NavMenu from '../components/header/NavMenu'
import AboutUs from '../components/home/aboutus';
import ContactUs from '../components/home/contactus';
import OurServices from '../components/home/ourservices';
import ContactUsForm from '../components/home/contactusform';

export default function Home() {
  return (
    <div className="page">
      <Head>
        <title>Auto Socorro 24h Juniauto - v2.0</title>
        <link rel="icon" href="/favicon.ico" />


        <link href="/assets/img/favicon.png" rel="icon" />
        <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

        <link href="/https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700|Raleway:300,400,400i,500,500i,700,800,900" rel="stylesheet" />

        <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/assets/vendor/icofont/icofont.min.css" rel="stylesheet" />
        <link href="/assets/vendor/animate.css/animate.min.css" rel="stylesheet" />
        <link href="/assets/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
        <link href="/assets/vendor/nivo-slider/css/nivo-slider.css" rel="stylesheet" />
        <link href="/assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="/assets/vendor/venobox/venobox.css" rel="stylesheet" />

        <link href="/assets/css/style.css" rel="stylesheet" />
      </Head>


      {/* ======= Header ======= */}
      <header id="header" className="fixed-top">
        <div className="container d-flex">
          <div className="logo mr-auto">
            <h1 className="text-light"><a href="index.html">Juniauto</a></h1>
            {/* Uncomment below if you prefer to use an image logo */}
            <a href="index.html"><img src="/assets/img/logo.png" alt="" className="img-fluid" /></a>
          </div>
          <NavMenu />
        </div>
      </header>{/* End Header */}
      {/* ======= Slider Section ======= */}
      <div id="home" className="slider-area" style={{ display: 'none' }}>
        <div className="bend niceties preview-2">
          <div id="ensign-nivoslider" className="slides">
            <img src="assets/img/slider/slider1.jpg" alt="" title="#slider-direction-1" />
            <img src="assets/img/slider/slider2.jpg" alt="" title="#slider-direction-2" />
            <img src="assets/img/slider/slider3.jpg" alt="" title="#slider-direction-3" />
          </div>
          {/* direction 1 */}
          <div id="slider-direction-1" className="slider-direction slider-one">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="slider-content">
                    {/* layer 1 */}
                    <div className="layer-1-1 hidden-xs wow animate__slideInDown animate__animated" data-wow-duration="2s" data-wow-delay=".2s">
                      <h2 className="title1">The Best Business Information </h2>
                    </div>
                    {/* layer 2 */}
                    <div className="layer-1-2 wow animate__fadeIn animate__animated" data-wow-duration="2s" data-wow-delay=".2s">
                      <h1 className="title2">We're In The Business Of Helping You Start Your Business</h1>
                    </div>
                    {/* layer 3 */}
                    <div className="layer-1-3 hidden-xs wow animate__slideInUp animate__animated" data-wow-duration="2s" data-wow-delay=".2s">
                      <a className="ready-btn right-btn page-scroll" href="#services">See Services</a>
                      <a className="ready-btn page-scroll" href="#about">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* direction 2 */}
          <div id="slider-direction-2" className="slider-direction slider-two">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="slider-content text-center">
                    {/* layer 1 */}
                    <div className="layer-1-1 hidden-xs wow animate__slideInUp animate__animated" data-wow-duration="2s" data-wow-delay=".2s">
                      <h2 className="title1">The Best Business Information </h2>
                    </div>
                    {/* layer 2 */}
                    <div className="layer-1-2 wow animate__fadeIn animate__animated" data-wow-duration="2s" data-wow-delay=".1s">
                      <h1 className="title2">We're In The Business Of Get Quality Business Service</h1>
                    </div>
                    {/* layer 3 */}
                    <div className="layer-1-3 hidden-xs wow animate__slideInUp animate__animated" data-wow-duration="2s" data-wow-delay=".2s">
                      <a className="ready-btn right-btn page-scroll" href="#services">See Services</a>
                      <a className="ready-btn page-scroll" href="#about">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* direction 3 */}
          <div id="slider-direction-3" className="slider-direction slider-two">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="slider-content">
                    {/* layer 1 */}
                    <div className="layer-1-1 hidden-xs wow animate__slideInUp animate__animated" data-wow-duration="2s" data-wow-delay=".2s">
                      <h2 className="title1">The Best business Information </h2>
                    </div>
                    {/* layer 2 */}
                    <div className="layer-1-2 wow animate__fadeIn animate__animated" data-wow-duration="2s" data-wow-delay=".1s">
                      <h1 className="title2">Helping Business Security &amp; Peace of Mind for Your Family</h1>
                    </div>
                    {/* layer 3 */}
                    <div className="layer-1-3 hidden-xs wow animate__slideInUp animate__animated" data-wow-duration="2s" data-wow-delay=".2s">
                      <a className="ready-btn right-btn page-scroll" href="#services">See Services</a>
                      <a className="ready-btn page-scroll" href="#about">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{/* End Slider */}
      <main id="main">
        <ContactUs />
        <AboutUs />

        {/* ======= Skills Section ======= */}
        <div className="our-skill-area fix hidden-sm">
          <div className="test-overly" />
          <div className="skill-bg area-padding-2">
            <div className="container">
              {/* section-heading end */}
              <div className="row">
                {/* single-skill start */}
                <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                  <div className="single-skill">
                    <div className="progress-circular">
                      <h3 className="progress-h4">mais de 50.000 clientes atendidos</h3>
                    </div>
                  </div>
                </div>
                {/* single-skill end */}
              </div>
            </div>
          </div>
        </div>{/* End Skills Section */}

        <OurServices />


        {/* ======= Suscribe Section ======= */}
        <div className="suscribe-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs=12">
                <div className="suscribe-text text-center">
                  <h3>Atendimento online via Whatsapp</h3>
                  <a target="_blank" className="sus-btn" href="https://api.whatsapp.com/send?phone=5521982769969&text=Ol%C3%A1%2C%20vi%20o%20seu%20site%20e%20preciso%20de%20mais%20informa%C3%A7%C3%B5es">enviar mensagem <i className="fa fa-whatsapp" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>{/* End Suscribe Section */}
        {/* ======= Contact Section ======= */}
        <div id="contact" className="contact-area">
          <div className="contact-inner area-padding">
            <div className="contact-overly" />
            <div className="container ">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="section-headline text-center">
                    <h2>Fale Conosco</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* Start contact icon column */}
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="contact-icon text-center">
                    <div className="single-icon">
                      <i className="fa fa-mobile" />
                      <p>
                        Telefone: 21 3356 6659<br />
                        <span>Atendimento 24 horas</span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* Start contact icon column */}
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="contact-icon text-center">
                    <div className="single-icon">
                      <i className="fa fa-envelope-o" />
                      <p>
                        Email: contato@juniauto.com.br<br />
                        Segunda-Sexta (9:00-17:00)
                      </p>
                    </div>
                  </div>
                </div>
                {/* Start contact icon column */}
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="contact-icon text-center">
                    <div className="single-icon">
                      <i className="fa fa-whatsapp" />
                      <p>
                        Whatsapp: 21 8276 9969<br />
                        <span>Atendimento 24 horas</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* Start Google Map */}
                <div className="col-md-6 col-sm-6 col-xs-12">
                  {/* Start Map */}
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117622.3592560307!2d-43.61882688731093!3d-22.887585060535006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be17999363715%3A0x46c3f27867ad9332!2sCampo%20Grande%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1595089607843!5m2!1spt-BR!2sbr" style={{ border: 0 }} allowFullScreen width="100%" height={380} frameBorder={0} />
                  {/* End Map */}
                </div>
                {/* End Google Map */}
                {/* Start  contact */}
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <ContactUsForm />
                </div>
                {/* End Left contact */}
              </div>
            </div>
          </div>
        </div>{/* End Contact Section */}
      </main>{/* End #main */}
      {/* ======= Footer ======= */}
      <footer>
        <div className="footer-area">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="footer-content">
                  <div className="footer-head">
                    <div className="footer-logo">
                      <h2>Juniauto</h2>
                    </div>
                    <p>
                      Atendemos dia e noite para uma melhor satisfação, saiba que pode contar conosco quando precisar.
                    </p>
                    <div className="footer-icons">
                      <ul>
                        <li>
                          <a target="_blank" href="https://fb.com/autosocorrojuniauto"><i className="fa fa-facebook" /></a>
                        </li>
                        <li>
                          <a target="_blank" href="https://www.google.com/maps/place/Auto+Socorro+Juniauto+-+Reboque+e+S.O.S.+24+Horas/@-22.9393364,-43.6011208,11z/data=!4m5!3m4!1s0x0:0x88b29bf9cd4ca032!8m2!3d-22.9393364!4d-43.6011208"><i className="fa fa-google" /></a>
                        </li>
                        <li>
                          <a target="_blank" href="https://api.whatsapp.com/send?phone=5521982769969&text=Ol%C3%A1%2C%20vi%20o%20seu%20site%20e%20preciso%20de%20mais%20informa%C3%A7%C3%B5es"><i className="fa fa-whatsapp" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* end single footer */}
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="footer-content">
                  <div className="footer-head">
                    <h4>Informação</h4>
                    <p>
                      Estr.Guandu do Sapê, 1395. Campo Grande. 23095-071. Rio de Janeiro - RJ
                    </p>
                    <div className="footer-contacts">
                      <p><span>Tel:</span> +55 21 8276 9969</p>
                      <p><span>Email:</span> contato@juniauto.com.br</p>
                      <p><span>Atendimento:</span> 24 horas</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* end single footer */}
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="footer-content">
                  <div className="footer-head">
                    <h4>Instagram</h4>
                    <div className="flicker-img">
                      <a href="javascript:void(0)"><img src="/assets/img/portfolio/1.jpg" alt="" /></a>
                      <a href="javascript:void(0)"><img src="/assets/img/portfolio/2.jpg" alt="" /></a>
                      <a href="javascript:void(0)"><img src="/assets/img/portfolio/3.jpg" alt="" /></a>
                      <a href="javascript:void(0)"><img src="/assets/img/portfolio/4.jpg" alt="" /></a>
                      <a href="javascript:void(0)"><img src="/assets/img/portfolio/5.jpg" alt="" /></a>
                      <a href="javascript:void(0)"><img src="/assets/img/portfolio/6.jpg" alt="" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-area-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="copyright text-center">
                  <p>
                    © Copyright <strong>Juniauto</strong>. Todos os direitos reservados
              </p>
                </div>
                <div className="credits">
                  {/*
                    All the links in the footer should remain intact.
                    You can delete the links only if you purchased the pro version.
                    Licensing information: https://bootstrapmade.com/license/
                    Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=eBusiness
                  */}
                  Designed by <a rel="nofollow" href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>{/* End  Footer */}
      <a href="#" className="back-to-top"><i className="fa fa-chevron-up" /></a>

      {/* Vendor JS Files */}
      {/* Template Main JS File */}

{/*
      <script src="/assets/vendor/jquery/jquery.min.js"></script>
      <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="/assets/vendor/jquery.easing/jquery.easing.min.js"></script>
      <script src="/assets/vendor/php-email-form/validate.js"></script>
      <script src="/assets/vendor/appear/jquery.appear.js"></script>
      <script src="/assets/vendor/knob/jquery.knob.js"></script>
      <script src="/assets/vendor/parallax/parallax.js"></script>
      <script src="/assets/vendor/wow/wow.min.js"></script>
      <script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
      <script src="/assets/vendor/nivo-slider/js/jquery.nivo.slider.js"></script>
      <script src="/assets/vendor/owl.carousel/owl.carousel.min.js"></script>
      <script src="/assets/vendor/venobox/venobox.min.js"></script> */}


      {/* <script src="/assets/js/main.js"></script> */}


    </div>
  )
}
