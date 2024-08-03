import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {

  const tabs = [
    { tab: 'Home', link: "/home" },
    { tab: 'About us', link: "/about" },
    { tab: 'Services', link: "/services" },
    { tab: 'Projects', link: "" },
    { tab: 'Contact us', link: "/contact" },
  ]

  const contacts = [
    { type: "Email", icon: faPhone, link: "tel:+1(919)271-0051" },
    { type: "Phone", icon: faEnvelope, link: "mailto:info@icengineeringinc.com" }
  ]

  return (
    <section className="bg-white border-t-4 mt-2 border-dashed">
      <div className="max-w-screen-xl px-4 py-5 mx-auto overflow-hidden">
        <nav className="flex flex-wrap justify-center gap-1">
          {tabs.map((tab) => (
            <div key={tab.tab} className="p-2">
              <a href={tab.link} className="text-sm leading-6 text-cyan hover:underline">{tab.tab}</a>
            </div>
          ))}
        </nav>

        <div className="py-5 flex justify-center items-center gap-5">
          {contacts.map((contact) => (
            <a href={contact.link}>
              <span className="sr-only">{contact.type}</span>
              <FontAwesomeIcon icon={contact.icon} size="1x" className="text-cyan" aria-hidden="true" fill="currentColor" />
            </a>
          ))}
          <div className="flex flex-row justify-center items-center gap-1">
            <FontAwesomeIcon icon={faLocationDot} size="1x" className="text-cyan" aria-hidden="true" fill="currentColor" />
            <p className="text-sm leading-6 text-center text-cyan/50">5409 Dillard Dr. Raleigh, NC 27606, USA</p>
          </div>
        </div>

        <p className="py-5 text-sm text-center text-cyan/50">
          <span className="text-cyan text-base">©</span> 2024 IC Engineering Inc, Inc. All rights reserved.
        </p>
      </div>
    </section>

  );
}

export default Footer;
