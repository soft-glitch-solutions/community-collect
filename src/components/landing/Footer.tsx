import { Recycle, Github, Twitter, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-xl bg-primary p-2.5">
                <Recycle className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">Recoza</span>
            </div>
            <p className="mb-6 text-background/70 max-w-md leading-relaxed">
              Helping people organise community recycling into predictable weekly income using trust networks. 
              Made with ❤️ in South Africa.
            </p>
            <div className="flex items-center gap-2 text-sm text-background/60">
              <MapPin className="h-4 w-4" />
              <span>South Africa</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-6 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#how-it-works" className="text-background/70 hover:text-background transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#features" className="text-background/70 hover:text-background transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#open-source" className="text-background/70 hover:text-background transition-colors">
                  Open Source
                </a>
              </li>
              <li>
                <a href="#donate" className="text-background/70 hover:text-background transition-colors">
                  Donate
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-6 text-lg font-semibold">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-background/70 hover:text-background transition-colors">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-background/70 hover:text-background transition-colors">
                  <Twitter className="h-4 w-4" />
                  Twitter
                </a>
              </li>
              <li>
                <a href="mailto:hello@recoza.org" className="flex items-center gap-2 text-background/70 hover:text-background transition-colors">
                  <Mail className="h-4 w-4" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-background/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Recoza. Open source, not-for-profit.
          </p>
          <p className="text-sm text-background/60">
            Built with Flutter & Firebase
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
