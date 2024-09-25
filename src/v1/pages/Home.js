import { Link } from "react-router-dom";
// components 
import Navbar from "../crumbs/Navbar";
import Footer from "../crumbs/Footer";
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faHammer, faCompassDrafting, faDownload, faCog } from '@fortawesome/free-solid-svg-icons';

//Images
import Banner from "../Images/banner.jpg";
import ProjectManagement from '../Images/project management.jpg';
import Structural from '../Images/structural design.jpg';
import RealEstate from '../Images/real estate.jpg';
import RealEstate2 from '../Images/real estate2.jpg';
import Modification from '../Images/modifications.jpg';
import Pic from '../Images/pic.jpg';
import Contact from '../Images/contact.jpg';
import Description from "../Images/description.jpg";

import CompanyProfile from "../docs/IC Engineering Content.pdf";



const Home = () => {

  const hero = {
    tagline: "Engineering a Sustainable Future, Together",
    paragraph: "For 30 years, IC Engineering Inc. has led with innovation and quality across energy, technology, and real estate sectors. We are dedicated to delivering cutting-edge, sustainable solutions while maintaining our legacy of engineering excellence."
  }

  const about = {
    heading: "A Legacy of Innovation & Client Success",
    body: "For three decades, IC Engineering Inc. has been a trusted partner, delivering innovative, high-quality, and client-centric solutions. Our unwavering commitment to excellence and a future-focused mindset have established us as industry leaders.",
    button: "Read more",
    link: "/about"
  }

  const services = {
    heading: "Services",
    button: "View all services",
    link: "/services",
    services: [
      { icon: faCog, title: "Project Management" },
      { icon: faCompassDrafting, title: "Structural Design" },
      { icon: faHouse, title: "Real Estate" },
      { icon: faHammer, title: "Design & Modifications" }
    ]

  };

  const projects = {
    heading: "Projects",
    button: "View all projects",
    link: "/projects",
    projects: [
      {
        image: ProjectManagement,
        type: "Project Management",
        description: "The Layhill development is set on a 14-acre site at 5429 Yates Mill Pond Rd., Raleigh, NC. The land, divided by a creek and governed by the Swift Creek Land Management Plan, offers 35% usable area, accommodating the construction of four estate-type houses."
      },
      {
        image: Structural,
        type: "Structural Engineering",
        description: "The Bryarton development is set on a 14-acre site at 5429 Yates Mill Pond Rd., Raleigh, NC. The land, divided by a creek and governed by the Swift Creek Land Management Plan, offers 35% usable area, accommodating the construction of four estate-type houses."
      }
    ]
  };

  const testimonials = [
    {
      name: 'John Doe',
      image: Pic,
      review: 'This is a great product! Highly recommend to everyone.',
      position: 'CEO',
      company: 'IC Engineering Inc.'
    },
    {
      name: 'Jane Smith',
      image: Pic,
      review: 'Fantastic service and support. Will use again.',
      position: 'Marketing Manager',
      company: 'Tech Solutions'
    },
    {
      name: 'Samuel Green',
      image: Pic,
      review: 'Very easy to integrate and use. Saves a lot of time.',
      position: 'Developer',
      company: 'WebWorks'
    },
    {
      name: 'Lisa Wong',
      image: Pic,
      review: 'Beautifully designed and very functional.',
      position: 'Designer',
      company: 'Creative Co.'
    },
    {
      name: 'Paul White',
      image: Pic,
      review: 'Makes project management a breeze.',
      position: 'Project Manager',
      company: 'BuildIt'
    }
  ];

  const contact = {
    heading: "Partner with IC Engineering",
    body: "We always take pride in quality over quantity and built the company slowly so we could earn a reputation for good work.",
    text: "Call now",
    link: "/contact"
  }

  return (
    <div>
      <Navbar />

      {/* Intro */}
      <section className="relative">
        <img src={Banner} alt="banner" className="inset-0 w-full h-[480px] md:h-[720px] object-cover" />
        <p className="inline-block text-sm font-extrabold leading-loose md:text-2xl text-black absolute top-5 left-5 bg-opacity-10 bg-gradient-to-b from-cyan via-transparent to-black/50 rounded-3xl p-4">
          {/* {displayedText} */}{hero.tagline}
        </p>
      </section>

      <div className="flex flex-col justify-center items-center gap-20 py-16 px-10">
        {/* About us */}
        <div className="flex flex-col-reverse md:flex-row-reverse justify-center items-center gap-10">
          <img src={Description} alt="About IC Engineering" className="rounded-3xl inset-0 w-full md:w-1/2 object-cover h-[480px]" />
          <div className="flex flex-col gap-8 md:gap-12 justify-center items-center">
            <Heading heading={about.heading} />
            <p className="w-full md:w-full text-[18px] font-sans text-justify text-cyan md:leading-relaxed md:text-[24px]">{about.body}</p>
            {/* <hr className="border-l-1 border-slate-700" /> */}
            <Button text={about.button} link={about.link} />
          </div>
        </div>

        {/* Company profile */}
        <section className="bg-cyan text-white flex flex-col gap-8 justify-center items-center mx-10 w-full py-10 rounded-tl-[50px] rounded-br-[50px]">
          <p className="px-5 text-center font-light">Download our Company Profile today to find the best service for your needs!</p>
          <div className="w-full flex flex-col md:flex-row gap-5 justify-center items-center px-16">
            <input className="bg-white rounded-xl p-2 w-full max-w-[560px] text-cyan text-center" type="text" placeholder="Name" />
            <input className="bg-white rounded-xl p-2 w-full max-w-[560px] text-cyan text-center" type="email" placeholder="Email" />
            <a href={CompanyProfile} target="_blank" className="bg-black text-white py-2 px-5 rounded-full w-min" rel="noreferrer">
              <FontAwesomeIcon icon={faDownload} size="2x" className="text-white" />
            </a>
          </div>
        </section>

        {/* Services */}
        <section className="flex flex-col justify-center items-center gap-10">
          <Heading heading={services.heading} />
          <div className="w-full flex flex-wrap justify-center items-center gap-10">
            {services.services.map((service, index) => (
              <div key={index} className="flex h-72 w-72 flex-col justify-center items-center border-2 rounded-3xl gap-10">
                <div className="bg-cyan rounded-full p-4">
                  <FontAwesomeIcon icon={service.icon} size="4x" className="text-white" />
                </div>
                <h3>{service.title}</h3>
              </div>
            ))}
          </div>
          <Button text={services.button} link={services.link} />
        </section>

        {/* Projects */}
        <section className="flex flex-col justify-center items-center gap-10">
          <h2 className="text-black text-2xl font-extrabold uppercase">{projects.heading}</h2>
          <div className="flex flex-row flex-wrap gap-8 justify-center">
            {projects.projects.map((project, index) => (
              <div key={index} className="relative flex flex-col justify-center items-center rounded-4xl gap-5 bg-cyan max-w-[350px]">
                <h3 className="text-xl font-bold font-merriweather py-2 text-white text-center">
                  <span className="font-inter text-slate-400 font-thin">Category: </span>
                  <br />
                  {project.type}
                </h3>
                <img src={project.image} alt={project.type} className="inset-0 h-[450px] object-cover" />
                <p className="absolute bottom-0 p-5 text-white/50 hover:text-white hover:bg-black/80 font-light">{project.description}</p>
              </div>
            ))}
          </div>
          <Button text={projects.button} link={projects.link} />
        </section >
      </div>

      {/* testimonials */}
      <section className="p-10">
        <h2 className="text-black text-2xl font-extrabold uppercase w-full text-center">Testimonials</h2>
        <div className="my-10 flex flex-wrap justify-center">

          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="w-[200px] p-2 border-l-4 text-cyan rounded-full">
              <div className="h-40 flex justify-center items-center">
                <img src={testimonial.image} alt={testimonial.name} className="h-28 w-28 rounded-full object-cover" />
              </div>

              <div className="flex flex-col items-center justify-center gap-4 py-4">
                <p className="text-center">
                  {testimonial.name}
                  <br />
                  <span className="text-sm font-light text-justify">{testimonial.position}, <br />{testimonial.company}</span>
                </p>
                <p className="text-center italic font-extralight text-black">"{testimonial.review}"</p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Call to action */}
      <section className="relative">
        <img src={Contact} alt="banner" className="inset-0 w-full h-[480px] object-cover" />
        <div className="absolute text-white w-1/2 md:w-1/2 top-10 py-10 left-10 bg-gradient-to-b from-transparent via-black to-transparent px-4 flex flex-col gap-7">
          <h1 className="text-[10px] md:text-xl font-semibold">{contact.heading}</h1>
          <p className="text-[10px] md:text-xl italic font-light">{contact.body}</p>
          <Link to={contact.link}
            className="text-[10px] md:text-xl uppercase bg-white hover:bg-black hover:text-white text-black py-2 px-2 rounded-full w-1/2 text-center"
          >
            {contact.text}
          </Link>
        </div>
      </section>

      <Footer />
    </div >
  );
}

export default Home;


const Heading = ({ heading }) => {
  return (
    <h2 className="text-black text-2xl font-extrabold uppercase">{heading}</h2>
  );
}

const Button = ({ text, link }) => {
  return (
    <Link to={link} className="uppercase bg-black text-white py-2 px-5 rounded-full max-w-72 min-w-64 text-center">{text}</Link>
  );
}