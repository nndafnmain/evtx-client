export const EventCard = () => {
  return (
    <article className="w-[93%] rounded-lg shadow-xl">
      <img
        src="/event/ed1.jpg"
        alt=""
        className="w-full rounded-lg rounded-b-none"
      />
      <section className="my-2 space-y-3 p-3">
        <p className="text-base font-normal text-gray-900">
          Kontras by Abdur Arsyad
        </p>
        <p className="text-gray-500">15 Feb 2025</p>
        <p className="text-base font-semibold text-gray-900">Rp 40000</p>
      </section>
      <hr className="mx-auto w-[95%] bg-gray-500 text-gray-500" />
      <section className="flex items-center gap-3 p-3">
        <img
          src="https://github.com/shadcn.png"
          width={40}
          height={40}
          className="rounded-full border border-gray-400"
        />
        <p>Comika Entertainment</p>
      </section>
    </article>
  );
};
