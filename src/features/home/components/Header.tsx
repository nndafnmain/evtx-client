import { Search } from "lucide-react";

export const Header = () => {
  const isAuth = true;
  return (
    <header className="flex h-16 items-center bg-[#2A3663] md:h-20">
      <div className="container flex items-center justify-between">
        <section>
          <h1 className="text-lg font-semibold text-[#B59F78] md:text-2xl">
            EVNTX
          </h1>
        </section>
        <section className="flex items-center gap-2">
          <input
            type="text"
            className="hidden w-96 rounded-md border border-white p-2 text-white md:block"
          />
          <button className="hidden rounded-md bg-[#FAF6E3] p-2 md:block">
            <Search className="text-blue-900" size={20} />
          </button>
        </section>
        {isAuth ? (
          <section className="hidden md:block">
            <img
              src="https://github.com/shadcn.png"
              width={40}
              height={40}
              className="rounded-full border border-gray-400"
            />
          </section>
        ) : (
          <section className="flex hidden gap-3 md:block">
            <button className="w-24 rounded-md bg-[#FAF6E3] p-2 text-sm">
              Register
            </button>
            <button className="w-24 rounded-md bg-[#FAF6E3] p-2 text-sm">
              Login
            </button>
          </section>
        )}
      </div>
    </header>
  );
};
