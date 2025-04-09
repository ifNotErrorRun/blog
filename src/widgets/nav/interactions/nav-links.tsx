const NavLinks = () => {
  return (
    <div className="flex space-x-8">
      <a
        href="/"
        className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
        Home
      </a>
      <a
        href="/posts"
        className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
        Posts
      </a>
      <a
        href="/about"
        className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
        About
      </a>
      <a
        href="/contact"
        className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
        Contact
      </a>
    </div>
  );
};

export default NavLinks;
