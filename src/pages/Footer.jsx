const Footer = () => {
  const footerLinks = {
    "Quick Links": {
      "Why Choose Us": "#",
      Category: "#",
      "Course Program": "#",
      Testimonials: "#",
    },
    Company: {
      "About Us": "#",
      Career: "#",
      Events: "#",
    },
    Support: {
      FAQ: "#",
      "Call Center": "#",
    },
    "Follows Us": {
      Facebook: "#",
      Twitter: "#",
      Instagram: "#",
      Youtube: "#",
    },
  };

  return (
    <footer className="bg-gray-800 text-white py-12 mt-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {Object.entries(links).map(([label, url]) => (
                  <li key={label}>
                    <a
                      href={url}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-gray-400">
          <p>© KitaBisaMengajar 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
