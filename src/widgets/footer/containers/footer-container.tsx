export default function FooterContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <footer className="p-6 bg-gray-100 text-center">
      <div className="container mx-auto">
        {children}
        <p className="mt-4 text-gray-600">
          © 2025 My Blog. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
