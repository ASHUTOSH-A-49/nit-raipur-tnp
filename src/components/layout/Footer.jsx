import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import nitrlogo from "../../assets/nitr.png"
const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Academics", href: "/academics" },
  { name: "Placements", href: "/placements" },
  { name: "Our Team", href: "/team" },
  { name: "Our Developers", href: "/developer" },
  { name: "Contact Us", href: "/contact" },
];

const resourceLinks = [
  { name: "NIT Raipur Main Site", href: "https://www.nitrr.ac.in" },
  { name: "Career Development Centre (CDC)", href: "https://cdc.nitrr.ac.in/" },
  { name: "NITRRFIE", href: "https://nitrrfie.in/" },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/nit.raipur", label: "Facebook" },
  // { icon: Twitter, href: "https://twitter.com/niaboratory", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/school/national-institute-of-technology-raipur/posts/?feedView=all", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/nit_raipur/", label: "Instagram" },
  // { icon: Youtube, href: "https://youtube.com/@nitraipur", label: "YouTube" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-elegant group-hover:shadow-glow transition-shadow duration-300">
                            <img src={nitrlogo} className="w-12 h-12 text-primary-foreground" />
                          </div>
              <div>
                <p className="font-bold text-lg leading-tight">Training & Placement Cell</p>
                <p className="text-sm text-primary-foreground/70">NIT Raipur</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              National Institute of Technology Raipur, serving the cause of technical education for more than six decades.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  NIT Raipur, G.E. Road, Raipur, Chhattisgarh 492010
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a
                  href="mailto:tpo@nitrr.ac.in"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  tpo@nitrr.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-sm text-primary-foreground/70 text-center">
              Made with love by amazing team
              © {new Date().getFullYear()} Training & Placement Cell, NIT Raipur. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};