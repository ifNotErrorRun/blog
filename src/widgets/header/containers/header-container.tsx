export default function HeaderContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-xl font-bold">My Blog</h1>
      <header className="bg-white shadow-sm">{children}</header>
    </div>
  );
}
