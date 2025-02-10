import { Calendar, Clock, LocateFixedIcon } from "lucide-react";

export const EventDetail = () => {
  return (
    <main className="pb-16 md:container">
      <section className="grid grid-cols-1 gap-3 md:grid-cols-3 md:p-10">
        {/* Image Section */}
        <section className="md:col-span-2">
          <img
            src="/event/ed1.jpg"
            alt=""
            className="w-full md:w-[100%] md:rounded-md"
          />
        </section>

        {/* Event Info */}
        <section className="rounded-md md:col-span-1 md:border md:border-gray-300 md:shadow-md">
          <section className="flex h-full flex-col justify-between space-y-2 p-3 md:space-y-5 md:p-5">
            <h1 className="text-xl font-semibold md:mb-10 md:text-2xl">
              Mens Rea - Makassar
            </h1>
            <div className="flex items-center gap-3">
              <Calendar color="blue" size={16} />
              <p className="text-sm">05 Jul - 05 Jul 2025</p>
            </div>
            <div className="flex items-center gap-3">
              <Clock color="blue" size={16} />
              <p className="text-sm">09.00 - 15.00</p>
            </div>
            <div className="flex items-center gap-3">
              <LocateFixedIcon color="blue" size={16} />
              <p className="text-sm">Auditorium Makassar</p>
            </div>
            <hr className="my-5 mt-3" />
            <section className="flex items-center gap-5">
              <div>
                <img
                  src="https://github.com/shadcn.png"
                  className="h-10 rounded-full"
                />
              </div>
              <div>
                <h1 className="text-sm text-gray-400">Held by: </h1>
                <p className="text-sm font-semibold">Comika Entertainment</p>
              </div>
            </section>
          </section>
        </section>

        {/* Description */}
        <section className="space-y-3 p-3 md:col-span-2 md:mt-10">
          <h1 className="text-xl font-bold">Description</h1>
          <p className="text-base leading-8 tracking-wide text-gray-700">
            Mens Rea adalah istilah hukum yang artinya "Niat Jahat" Dalam
            persidangan seringkali yang harus dicari tahu adalah apakah ada niat
            jahat dalam tindakan seseorang. Dalam Stand-Up Comedy Special ke 10,
            Pandji Pragiwaksono ingin memberi pesan bahwa tidak ada niat jahat
            dari yang dia bawakan di atas panggung hanyalah komedi dengan tujuan
            membuat penonton tertawa. Namun pada saat yang bersamaan, di
            pertunjukan yang akan bertema politik ini Pandji akan mencari tahu
            adakah niat jahat di balik tindak- tanduk beberapa nama di dunia
            politik Indonesia. Mens Rea Tour akan mulai berjalan di tahun 2025
            dengan mengunjungi 10 kota nasional & 1 kota Jakarta. Mens Rea
            adalah istilah hukum yang artinya "Niat Jahat" Dalam persidangan
            seringkali yang harus dicari tahu adalah apakah ada niat jahat dalam
            tindakan seseorang. Dalam Stand-Up Comedy Special ke 10, Pandji
            Pragiwaksono ingin memberi pesan bahwa tidak ada niat jahat dari
            yang dia bawakan di atas panggung hanyalah komedi dengan tujuan
            membuat penonton tertawa. Namun pada saat yang bersamaan, di
            pertunjukan yang akan bertema politik ini Pandji akan mencari tahu
            adakah niat jahat di balik tindak- tanduk beberapa nama di dunia
            politik Indonesia. Mens Rea Tour akan mulai berjalan di tahun 2025
            dengan mengunjungi 10 kota nasional & 1 kota Jakarta. Mens Rea
            adalah istilah hukum yang artinya "Niat Jahat" Dalam persidangan
            seringkali yang harus dicari tahu adalah apakah ada niat jahat dalam
            tindakan seseorang. Dalam Stand-Up Comedy Special ke 10, Pandji
            Pragiwaksono ingin memberi pesan bahwa tidak ada niat jahat dari
            yang dia bawakan di atas panggung hanyalah komedi dengan tujuan
            membuat penonton tertawa. Namun pada saat yang bersamaan, di
            pertunjukan yang akan bertema politik ini Pandji akan mencari tahu
            adakah niat jahat di balik tindak- tanduk beberapa nama di dunia
            politik Indonesia. Mens Rea Tour akan mulai berjalan di tahun 2025
            dengan mengunjungi 10 kota nasional & 1 kota Jakarta. Mens Rea
            adalah istilah hukum yang artinya "Niat Jahat" Dalam persidangan
            seringkali yang harus dicari tahu adalah apakah ada niat jahat dalam
            tindakan seseorang. Dalam Stand-Up Comedy Special ke 10, Pandji
            Pragiwaksono ingin memberi pesan bahwa tidak ada niat jahat dari
            yang dia bawakan di atas panggung hanyalah komedi dengan tujuan
            membuat penonton tertawa. Namun pada saat yang bersamaan, di
            pertunjukan yang akan bertema politik ini Pandji akan mencari tahu
            adakah niat jahat di balik tindak- tanduk beberapa nama di dunia
            politik Indonesia. Mens Rea Tour akan mulai berjalan di tahun 2025
            dengan mengunjungi 10 kota nasional & 1 kota Jakarta. Mens Rea
            adalah istilah hukum yang artinya "Niat Jahat" Dalam persidangan
            seringkali yang harus dicari tahu adalah apakah ada niat jahat dalam
            tindakan seseorang. Dalam Stand-Up Comedy Special ke 10, Pandji
            Pragiwaksono ingin memberi pesan bahwa tidak ada niat jahat dari
            yang dia bawakan di atas panggung hanyalah komedi dengan tujuan
            membuat penonton tertawa. Namun pada saat yang bersamaan, di
            pertunjukan yang akan bertema politik ini Pandji akan mencari tahu
            adakah niat jahat di balik tindak- tanduk beberapa nama di dunia
            politik Indonesia. Mens Rea Tour akan mulai berjalan di tahun 2025
            dengan mengunjungi 10 kota nasional & 1 kota Jakarta.
          </p>
        </section>

        {/* Buy Ticket Button (Sticky on Desktop, Fixed on Mobile) */}
        <section className="md:col-span-1 md:mt-10">
          <section className="relative rounded-md border border-gray-300 p-5 shadow-md md:sticky md:top-10">
            <button className="hidden w-full rounded-md bg-blue-800 p-2 text-white md:block">
              Buy Ticket
            </button>
          </section>
        </section>
      </section>

      {/* Fixed Buy Button for Mobile */}
      <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow md:hidden">
        <button
          className="w-full rounded-md bg-blue-800 p-2 text-white"
          onClick={() => alert("ASYU")}
        >
          Buy Ticket
        </button>
      </div>
    </main>
  );
};
