import { Link } from "@tanstack/react-router";

interface RouteInfo {
  path: string;
  name: string;
}

const mainRoutes = [
  { path: "/", name: "Home" },
  { path: "/createUser", name: "Create User" },
  { path: "/createSong", name: "Create Song" },
  { path: "/getPlaylist", name: "Get Playlist" },
];

export function SiteHeader() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">Youtube Do Stuff</span>
            </div>
            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {mainRoutes.map(({ path, name }: RouteInfo) => (
                <Link
                  key={path}
                  to={path}
                  className="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium [&.active]:border-indigo-500 [&.active]:text-gray-900 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  {name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
