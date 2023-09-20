import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const service = useLoaderData();
  const { title, price } = service;
  return (
    <div className="card-body">
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className=" form-control">
            <label className="label">
              {/* <span className="label-text">Email</span> */}
              <span className="text-red-900">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered bg-orange-100 text-black"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="text-red-900">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered bg-orange-100 text-black"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="text-red-900">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered bg-orange-100 text-black"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="text-red-900">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered bg-orange-100 text-black"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary"
            type="submit"
            value="Confirm Order"
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
