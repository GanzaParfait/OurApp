function ParkingSlots() {
  const clients = [
    {
      id: 1,
      names: "Alice Uwimana",
      phone: "+250 788 123 456",
      address: "KG 17 Ave, Gasabo, Kigali, Rwanda",
    },
    {
      id: 2,
      names: "Eric Ndayisaba",
      phone: "+250 782 345 678",
      address: "KN 5 Rd, Nyarugenge, Kigali, Rwanda",
    },
    {
      id: 3,
      names: "Jean Claude Habimana",
      phone: "+250 789 654 321",
      address: "KK 15 Rd, Kicukiro, Kigali, Rwanda",
    },
    {
      id: 4,
      names: "Diane Mukamana",
      phone: "+250 783 987 654",
      address: "KG 9 Ave, Kimihurura, Kigali, Rwanda",
    },
    {
      id: 5,
      names: "Patrick Nshimiyimana",
      phone: "+250 781 222 333",
      address: "KN 3 Ave, Nyamirambo, Kigali, Rwanda",
    },
    {
      id: 6,
      names: "Claudine Uwera",
      phone: "+250 784 555 666",
      address: "KG 28 St, Kacyiru, Kigali, Rwanda",
    },
    {
      id: 7,
      names: "Samuel Mugisha",
      phone: "+250 780 777 888",
      address: "KK 31 Ave, Kanombe, Kigali, Rwanda",
    },
    {
      id: 8,
      names: "Yvonne Ingabire",
      phone: "+250 785 999 000",
      address: "KG 11 Ave, Remera, Kigali, Rwanda",
    },
    {
      id: 9,
      names: "Emmanuel Rukundo",
      phone: "+250 786 111 222",
      address: "KN 7 Rd, Gisozi, Kigali, Rwanda",
    },
    {
      id: 10,
      names: "Beatrice Nyiransabimana",
      phone: "+250 787 333 444",
      address: "KG 19 Ave, Kibagabaga, Kigali, Rwanda",
    },
  ];

  return (
    <>
      <div className="container p-2">
        <div className="py-4">
          <h1>Clients</h1>
        </div>

        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Names</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Address</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id} onClick={() => console.log(client.id)}>
                  <td scope="row">{client.id}</td>
                  <td>{client.names}</td>
                  <td>{client.phone}</td>
                  <td>{client.address}</td>
                  <td>
                    <button className="btn btn-primary rounded-1">Edit</button>
                    <button className="btn btn-danger rounded-1">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <br />
      </div>
    </>
  );
}

export default ParkingSlots;
