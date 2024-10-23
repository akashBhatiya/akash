import Link from "next/link";

const Services = ({ extraClass }) => {
  const services = [
    {
      id: 1,
      title: "MERN Stack Solutions",
      text: "Building responsive, high-performance websites tailored to your business needs.",
    },
    {
      id: 2,
      title: "Cloud Solutions (AWS & Azure)",
      text: "Leveraging AWS and Azure for scalable, secure, and cost-efficient cloud infrastructure and services.",
    },
    {
      id: 3,
      title: "API Development & Integration",
      text: "Creating secure APIs and integrating third-party services to streamline your operations.",
    },
    {
      id: 4,
      title: "UI/UX Design & Frontend Development",
      text: "Designing intuitive, user-friendly interfaces with React for seamless user experiences.",
    },
    {
      id: 5,
      title: "Backend Architecture & Optimization",
      text: "Developing optimized, scalable backend systems with Node.js for improved performance.",
    },
    {
      id: 6,
      title: "Technical Consulting & Code Audits",
      text: "Providing expert advice and code audits to enhance your technology and digital strategy.",
    },
  ];
  return (
    <section
      id="services"
      className={`services-area pt-130 rpt-100 pb-100 rpb-70 rel z-1 ${extraClass}`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Popular Services</span>
              <h2>
                <span>Advanced Software Solutions</span> for Your Business Development
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service) => (
            <div className="col-lg-6" key={service.id}>
              <div className="service-item wow fadeInUp delay-0-2s">
                <div className="number">
                  {service.id >= 9 ? service.id : `0${service.id}`}.
                </div>
                <div className="content">
                  <h4>{service.title}</h4>
                  <p>{service.text}</p>
                </div>
                <Link legacyBehavior href="/#">
                  <a className="details-btn">
                    <i className="fas fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};
export default Services;

export const Services2 = () => {
  return (
    <section
      id="services"
      className="services-area-two pt-130 rpt-100 pb-140 rpb-100 rel z-1"
    >
      <div className="container container-1200">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">
                <i className="flaticon-asterisk-1" /> my services area
              </span>
              <h2>MY SERVICE AREA</h2>
            </div>
          </div>
        </div>
        <div className="services-two-wrap">
          <div className="service-item-two wow fadeInUp delay-0-2s">
            <div className="icon">
              <img src="assets/images/icons/service1.png" alt="Icon" />
            </div>
            <h5 className="title">
              <a href="#">WEBSITE DEvelopment</a>
            </h5>
            <div className="text">
              Welcome to our portfolio website! We are a prof printing company
              that offers a wide range of Lo rem ipsum dolor sit amet,
              consectetur
            </div>
            <ul className="list">
              <li>Ui/Ux Design</li>
              <li>Research</li>
              <li>Web &amp; Mobile app</li>
            </ul>
            <a href="#" className="details-btn">
              <i className="fal fa-long-arrow-right" />
            </a>
          </div>
          <div className="service-item-two wow fadeInUp delay-0-2s">
            <div className="icon">
              <img src="assets/images/icons/service2.png" alt="Icon" />
            </div>
            <h5 className="title">
              <a href="#">Digital Marketing</a>
            </h5>
            <div className="text">
              Welcome to our portfolio website! We are a prof printing company
              that offers a wide range of Lo rem ipsum dolor sit amet,
              consectetur
            </div>
            <ul className="list">
              <li>Ui/Ux Design</li>
              <li>Research</li>
              <li>Web &amp; Mobile app</li>
            </ul>
            <a href="#" className="details-btn">
              <i className="fal fa-long-arrow-right" />
            </a>
          </div>
          <div className="service-item-two wow fadeInUp delay-0-2s">
            <div className="icon">
              <img src="assets/images/icons/service3.png" alt="Icon" />
            </div>
            <h5 className="title">
              <a href="#">Front End DEvelopment</a>
            </h5>
            <div className="text">
              Welcome to our portfolio website! We are a prof printing company
              that offers a wide range of Lo rem ipsum dolor sit amet,
              consectetur
            </div>
            <ul className="list">
              <li>Ui/Ux Design</li>
              <li>Research</li>
              <li>Web &amp; Mobile app</li>
            </ul>
            <a href="#" className="details-btn">
              <i className="fal fa-long-arrow-right" />
            </a>
          </div>
          <div className="service-item-two wow fadeInUp delay-0-2s">
            <div className="icon">
              <img src="assets/images/icons/service4.png" alt="Icon" />
            </div>
            <h5 className="title">
              <a href="#">Joomla redesigning</a>
            </h5>
            <div className="text">
              Welcome to our portfolio website! We are a prof printing company
              that offers a wide range of Lo rem ipsum dolor sit amet,
              consectetur
            </div>
            <ul className="list">
              <li>Ui/Ux Design</li>
              <li>Research</li>
              <li>Web &amp; Mobile app</li>
            </ul>
            <a href="#" className="details-btn">
              <i className="fal fa-long-arrow-right" />
            </a>
          </div>
        </div>
        <div className="services-more-btn text-center pt-55 wow fadeInUp delay-0-2s">
          <Link legacyBehavior href="services" className="theme-btn">
            Get more services
          </Link>
        </div>
      </div>
    </section>
  );
};
