import React, { useEffect, useState } from 'react';
import { listReservations, listTables } from '../utils/api';
import { previous, next, today } from '../utils/date-time';
import useQuery from '../utils/useQuery';
import ErrorAlert from '../layout/ErrorAlert';
import ReservationDetail from './ReservationDetail';
import TableDetail from './TableDetail';

function Dashboard() {
  const date = today();

  const [reservations, setReservations] = useState(null);
  const [tables, setTables] = useState(null);
  const [viewDate, setViewDate] = useState(date);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setError(null);
    if (viewDate === date) {
      listReservations({ date }, abortController.signal)
        .then(setReservations)
        .catch(setError);
    } else {
      listReservations({ viewDate }, abortController.signal)
        .then(setReservations)
        .catch(setError);
    }
    return () => abortController.abort();
  }, [date, viewDate]);

  useEffect(() => {
    const abortController = new AbortController();
    setError(null);
    listTables().then(setTables).catch(setError);
    return () => abortController.abort();
  }, []);

  const query = useQuery();
  const searchedDate = query.get('date');

  useEffect(() => {
    if (searchedDate && searchedDate !== '') {
      setViewDate(searchedDate);
    }
  }, [searchedDate]);

  const handlePreviousDay = (e) => {
    e.preventDefault();
    setViewDate(previous(viewDate));
  };
  const handleNextDay = (e) => {
    e.preventDefault();
    setViewDate(next(viewDate));
  };
  const handleTodayDay = (e) => {
    e.preventDefault();
    setViewDate(date);
  };
  function handleDateChange({ target }) {
    setViewDate(target.value);
  }

  if (reservations) {
    return (
      <main className='m-3'>
        <div className='page-head-container container m-1'>
          <div className='d-flex m-3 justify-content-center'>
            <h1>Dashboard</h1>
          </div>
          <div>
            <label className='mx-3' htmlFor='reservation_date'>
              <h5>Current Date:</h5>
            </label>
            <input
              className='px-2 rounded'
              type='date'
              pattern='\d{4}-\d{2}-\d{2}'
              name='reservation_date'
              onChange={handleDateChange}
              value={viewDate}
            />
          </div>

          <div>
            <div>
              <button className='btn btn-dark mr-3' onClick={handlePreviousDay}>
                Previous Day
              </button>
              <button className='btn btn-dark mr-3' onClick={handleTodayDay}>
                Today
              </button>
              <button className='btn btn-dark mr-3' onClick={handleNextDay}>
                Next Day
              </button>
            </div>
          </div>
        </div>

        <div className=''>
          <h1>Reservations</h1>
        </div>

        <div className='table-tile-2 d-flex'>
          {reservations &&
            reservations.map((res) => (
              <div className='col-sm-6 mb-1' key={res.reservation_id}>
                <ReservationDetail reservation={res} />
              </div>
            ))}
        </div>

        <ErrorAlert error={error} />

        <div className=''>
          <h1>Tables</h1>
          <div className='table-tile row'>
            {tables &&
              tables.map((table) => (
                <div className='col-md-6 mb-3' key={table.table_id}>
                  <TableDetail table={table} />
                </div>
              ))}
          </div>
        </div>
      </main>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default Dashboard;
