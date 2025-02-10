type Attendee = {
  id: string;
  name: string;
  email: string;
  ticketType: string;
  hasPaid?: boolean;
};

const attendees: Attendee[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    ticketType: "VIP",
    hasPaid: true,
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    ticketType: "Regular",
    hasPaid: false,
  },
  {
    id: "3",
    name: "Alice Brown",
    email: "alice@example.com",
    ticketType: "Free",
    hasPaid: true,
  },
];

export const AttendeeLists = () => {
  return (
    <div className="overflow-x-auto">
      {attendees.length > 0 ? (
        <table className="min-w-full rounded-lg border border-gray-300 shadow-sm">
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="border p-3">#</th>
              <th className="border p-3">Name</th>
              <th className="border p-3">Email</th>
              <th className="border p-3">Ticket Type</th>
              <th className="border p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {attendees.map((attendee, index) => (
              <tr key={attendee.id} className="odd:bg-white even:bg-gray-50">
                <td className="border p-3">{index + 1}</td>
                <td className="border p-3">{attendee.name}</td>
                <td className="border p-3">{attendee.email}</td>
                <td className="border p-3">{attendee.ticketType}</td>
                <td
                  className={`border p-3 ${attendee.hasPaid ? "bg-blue-200 text-blue-500" : "bg-red-200 text-red-600"} `}
                >
                  {attendee.hasPaid ? "PAID" : "UNPAID"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="mt-4 text-center text-gray-500">No attendees found.</p>
      )}
    </div>
  );
};
