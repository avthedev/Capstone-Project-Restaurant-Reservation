import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createTable } from '../utils/api';
import ErrorAlert from './ErrorAlert';

function NewTable() {
  const history = useHistory();
  const [table_name, setTable_name] = useState('');
  const [capacity, setCapacity] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    const table = {
      table_name,
      capacity,
    };
    createTable(table)
      .then(() => {
        history.push('/dashboard');
      })
      .catch(setError);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <div className='container'>
      <ErrorAlert error={error} />

      <h1 className='flex-row m-3'>New Table Form</h1>
      <div className='col m-1 p-3 form-container'>
        <div>
          <form className='form-group' onSubmit={handleSubmit}>
            <label>Table Name:</label>
            <br />
            <input
              name='table_name'
              type='text'
              required
              onChange={(e) => setTable_name(e.target.value)}
              value={table_name}
              className='form-control'
            />
            <br />
            <label>Table Capacity:</label>
            <br />
            <input
              name='capacity'
              type='number'
              required
              onChange={(e) => setCapacity(e.target.valueAsNumber)}
              value={capacity}
              className='form-control'
            />
            <br />

            <div className='d-flex justify-content-around'>
              <button className='btn btn-danger' onClick={handleCancel}>
                Cancel
              </button>
              <button className='btn btn-primary' type='submit'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewTable;
