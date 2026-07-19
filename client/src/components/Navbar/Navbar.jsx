import { Menu, UserCircle2 } from "lucide-react";

const Navbar = ({ setSidebarOpen }) => {
  return (
    <header className="fixed top-0 left-0 md:left-64 right-0 h-16 bg-white border-b shadow-sm flex items-center justify-between px-6 z-40">
      <div className="flex items-center gap-3">
        <button
          className="md:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={26} />
        </button>

        <h1 className="text-xl font-bold text-blue-600">
          EduBridge AI
        </h1>
      </div>

      <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition">
        <UserCircle2 size={24} />
        <span className="hidden sm:block font-medium">
          Profile
        </span>
      </button>
    </header>
  );
};

export default Navbar;