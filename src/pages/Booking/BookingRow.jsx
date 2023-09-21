const BookingRow = ({ booking }) => {
  const { service, customerName, email, price, img } = booking;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <img
          className="avatar w-28 rounded-md my-auto"
          src={img}
          alt="Avatar Tailwind CSS Component"
        />
      </td>
      <td>
        <p className=" ml-4">{service}</p>
      </td>
      <td>
        <p className="mt-0">{customerName}</p>
      </td>
      <td>{email}</td>
      <td>{price}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default BookingRow;
