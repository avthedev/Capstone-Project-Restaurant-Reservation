import React, { useEffect, useState } from "react";
import { listReservations } from "../utils/api";
import ReservationDetail from "../dashboard/ReservationDetail";

function SearchPhone() {
  const [mobile_number, setMobile_number] = useState("");
  const [reservations, setReservations] = useState(null);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (reservations && reservations.length === 0) {
      setShowError(true);
    }
  }, [reservations]);

  const handleSubmit = (e) => {
    e.preventDefault();
    listReservations({ mobile_number }).then((response) => {
      setReservations(response);
    });
  };

  return (
    <div className="container">
      <div>
        {showError && (
          <p className="alert alert-danger">No reservations found.</p>
        )}
      </div>
      <div class="flex-row m-3">
        <h1 className="">Search Form</h1>

        <form className="form-group " onSubmit={handleSubmit}>
          <div class="row-cols-3 input-group mb-3 ">
            <input
              name="mobile_number"
              type="text"
              placeholder="Enter a customer's phone number"
              required
              onChange={(e) => setMobile_number(e.target.value)}
              value={mobile_number}
              className="form-control "
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="submit">
                FIND
              </button>
            </div>
          </div>
        </form>
        <div className="row-cols-2">
          <ul className="list-group list-group-flush">
            {reservations &&
              reservations.map((res) => (
                <li className="list-group-item" key={res.reservation_id}>
                  <ReservationDetail reservation={res} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchPhone;
