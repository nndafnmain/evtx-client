export const CreateEvent = () => {
  return (
    <main className="container h-[95%] w-[80%] p-2">
      <section className="rounded-md border border-gray-400">
        <div className="">
          <img src="/event/ed1.jpg" alt="" className="w-full rounded-md" />
        </div>
        <div className="grid grid-cols-2 gap-2 space-y-2 p-3">
          <input type="text" className="input" />
          <input type="text" className="input" />
          <input type="text" className="input" />
          <input type="text" className="input" />
          <input type="text" className="input" />
        </div>
      </section>
    </main>
  );
};
