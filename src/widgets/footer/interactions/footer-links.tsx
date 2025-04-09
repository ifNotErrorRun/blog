const FooterLinks = () => {
  return (
    <div className="flex justify-center space-x-6">
      <a href="/about" className="text-gray-600 hover:text-gray-900">
        About
      </a>
      <a href="/privacy" className="text-gray-600 hover:text-gray-900">
        Privacy
      </a>
      <a href="/terms" className="text-gray-600 hover:text-gray-900">
        Terms
      </a>
      <a href="/contact" className="text-gray-600 hover:text-gray-900">
        Contact
      </a>
    </div>
  );
};

export default FooterLinks;
