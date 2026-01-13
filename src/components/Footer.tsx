import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Full Menu", href: "#menu" },
    { name: "Book a Table", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const openingHours = [
    { day: "Mon - Thu", hours: "11:00 AM - 10:00 PM" },
    { day: "Fri - Sat", hours: "11:00 AM - 11:00 PM" },
    { day: "Sunday", hours: "12:00 PM - 10:00 PM" },
  ];

  return (
    <footer id="contact" className="bg-footer text-footer-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">B</span>
              </div>
              <span className="font-heading font-bold text-lg text-white">
                Bismillah
              </span>
            </a>
            <p className="text-sm text-footer-foreground/70 mb-6">
              Authentic Pakistani cuisine in the heart of Montreal. Bringing families together since 1998.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-footer-foreground/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-footer-foreground/70">
                  4120 Rue Tilson S.W.,<br />Montreal, QC H1P1V5
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-sm text-footer-foreground/70">(514) 731-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-sm text-footer-foreground/70">hello@bismillahrest.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-semibold text-white mb-4">Opening Hours</h3>
            <ul className="space-y-3">
              {openingHours.map((item) => (
                <li key={item.day} className="flex justify-between text-sm">
                  <span className="text-footer-foreground/70">{item.day}</span>
                  <span className="text-primary">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-footer-foreground/50">
            © 2024 Bismillah Restaurant. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-footer-foreground/50 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-footer-foreground/50 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
