import { useHistory } from 'react-router-dom';

function ReservationForm({ handleSubmit, formData, setFormData }) {
  const history = useHistory();

  const handleCancel = (e) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <div className='container'>
      <h1 className='flex-row m-3'>Create a Reservation</h1>
      <div className='col m-1 p-3 form-container '>
        <form className='form-group' onSubmit={handleSubmit}>
          <label className='form-label'>First Name:</label>
          <br />
          <input
            name='first_name'
            placeholder='James'
            type='text'
            required
            onChange={(e) =>
              setFormData({
                first_name: e.target.value,
                last_name: formData.last_name,
                mobile_number: formData.mobile_number,
                reservation_date: formData.reservation_date,
                reservation_time: formData.reservation_time,
                people: formData.people,
              })
            }
            value={formData.first_name}
            className='form-control'
          />
          <br />
          <label className='form-label'>Last Name:</label>
          <br />
          <input
            name='last_name'
            placeholder='Bond'
            type='text'
            required
            onChange={(e) =>
              setFormData({
                first_name: formData.first_name,
                last_name: e.target.value,
                mobile_number: formData.mobile_number,
                reservation_date: formData.reservation_date,
                reservation_time: formData.reservation_time,
                people: formData.people,
              })
            }
            value={formData.last_name}
            className='form-control'
          />
          <br />
          <label className='form-label'>Mobile Number:</label>
          <br />
          <input
            name='mobile_number'
            placeholder='(999) 999-9999'
            type='tel'
            id='mobile-number'
            required
            onChange={(e) =>
              setFormData({
                first_name: formData.first_name,
                last_name: formData.last_name,
                mobile_number: e.target.value,
                reservation_date: formData.reservation_date,
                reservation_time: formData.reservation_time,
                people: formData.people,
              })
            }
            value={formData.mobile_number}
            className='form-control'
          />
          <br />
          <label>Reservation Date:</label>
          <br />
          <input
            name='reservation_date'
            type='date'
            required
            onChange={(e) =>
              setFormData({
                first_name: formData.first_name,
                last_name: formData.last_name,
                mobile_number: formData.mobile_number,
                reservation_date: e.target.value,
                reservation_time: formData.reservation_time,
                people: formData.people,
              })
            }
            value={formData.reservation_date}
            className='form-control'
          />
          <br />
          <label>Reservation Time:</label>
          <br />
          <input
            name='reservation_time'
            pattern='[0-9]{2}:[0-9]{2}'
            type='time'
            id='reservation_time'
            required
            onChange={(e) =>
              setFormData({
                first_name: formData.first_name,
                last_name: formData.last_name,
                mobile_number: formData.mobile_number,
                reservation_date: formData.reservation_date,
                reservation_time: e.target.value,
                people: formData.people,
              })
            }
            value={formData.reservation_time}
            className='form-control'
          />
          <br />
          <label>Amount of People:</label>
          <br />
          <input
            name='people'
            type='number'
            required
            onChange={(e) =>
              setFormData({
                first_name: formData.first_name,
                last_name: formData.last_name,
                mobile_number: formData.mobile_number,
                reservation_date: formData.reservation_date,
                reservation_time: formData.reservation_time,
                people: e.target.valueAsNumber,
              })
            }
            value={formData.people}
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
  );
}

export default ReservationForm;
