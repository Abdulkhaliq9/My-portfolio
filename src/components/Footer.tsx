import { Link } from "react-router-dom";
import { aboutContent } from "@/content/about";
import { navLinks } from "@/content/navigation";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Link to="/" className="text-lg font-bold gradient-text">
              {aboutContent.name.split(" ")[0]}
            </Link>
            <span className="text-foreground font-bold text-lg">.</span>
          </div>
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {aboutContent.name}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
