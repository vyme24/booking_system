import React, { useState } from 'react';

const CarSearch = () => {
  const [dropoffType, setDropoffType] = useState('same-drop');
  const [formData, setFormData] = useState({
    from: 'Newyork',
    to: 'Newyork',
    departure: '21-10-2024',
    return: '23-10-2024',
    pickupTime: '11:45 PM',
    dropoffTime: '11:45 PM'
  });

  const dropoffTypes = [
    { id: 'same-drop', label: 'Same drop-off' },
    { id: 'different-drop', label: 'Different Drop off' },
    { id: 'airport', label: 'Airport' },
    { id: 'hourly-drop', label: 'Hourly Package' }
  ];

  return (
    <form action="car-grid.html">
      <div className="d-flex align-items-center justify-content-between flex-wrap mb-2">
        <div className="d-flex align-items-center flex-wrap">
          {dropoffTypes.map((type) => (
            <div key={type.id} className="form-check d-flex align-items-center me-3 mb-2">
              <input
                className="form-check-input mt-0"
                type="radio"
                name="drop"
                id={type.id}
                value={type.id}
                checked={dropoffType === type.id}
                onChange={() => setDropoffType(type.id)}
              />
              <label className="form-check-label fs-14 ms-2" htmlFor={type.id}>
                {type.label}
              </label>
            </div>
          ))}
        </div>
        <h6 className="fw-medium fs-16 mb-2">Book Car for rental</h6>
      </div>

      <div className="d-lg-flex">
        <div className="d-flex form-info">
          {/* From Location */}
          <div className={`form-item dropdown ${dropoffType === 'airport' ? 'pickup-airport' : 'from-location'}`}>
            <div data-bs-toggle="dropdown">
              <label className="form-label fs-14 text-default mb-1">From</label>
              <input
                type="text"
                className="form-control"
                value={formData.from}
                onChange={(e) => setFormData({...formData, from: e.target.value})}
              />
              <p className="fs-12 mb-0">
                {dropoffType === 'airport' ? 'Ken International Airport' : 'USA'}
              </p>
            </div>
          </div>

          {/* To Location (only for different drop-off) */}
          {dropoffType === 'different-drop' && (
            <div className="form-item dropdown to-location ps-2 ps-sm-3">
              <div data-bs-toggle="dropdown">
                <label className="form-label fs-14 text-default mb-1">To</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.to}
                  onChange={(e) => setFormData({...formData, to: e.target.value})}
                />
                <p className="fs-12 mb-0">USA</p>
                <span className="way-icon badge badge-primary rounded-pill translate-middle">
                  <i className="fa-solid fa-arrow-right-arrow-left"></i>
                </span>
              </div>
            </div>
          )}

          {/* Departure Date */}
          <div className="form-item">
            <label className="form-label fs-14 text-default mb-1">Departure</label>
            <input
              type="text"
              className="form-control datetimepicker"
              value={formData.departure}
              onChange={(e) => setFormData({...formData, departure: e.target.value})}
            />
            <p className="fs-12 mb-0">Monday</p>
          </div>

          {/* Return Date (not for hourly) */}
          {dropoffType !== 'hourly-drop' && (
            <div className="form-item return-drop">
              <label className="form-label fs-14 text-default mb-1">Return</label>
              <input
                type="text"
                className="form-control datetimepicker"
                value={formData.return}
                onChange={(e) => setFormData({...formData, return: e.target.value})}
              />
              <p className="fs-12 mb-0">Wednesday</p>
            </div>
          )}

          {/* Pickup Time */}
          <div className="form-item">
            <label className="form-label fs-14 text-default mb-1">Pickup Time</label>
            <input
              type="text"
              className="form-control timepicker"
              value={formData.pickupTime}
              onChange={(e) => setFormData({...formData, pickupTime: e.target.value})}
            />
          </div>

          {/* Dropoff Time (not for hourly) */}
          {dropoffType !== 'hourly-drop' && (
            <div className="form-item dropoff-time">
              <label className="form-label fs-14 text-default mb-1">Dropoff Time</label>
              <input
                type="text"
                className="form-control timepicker"
                value={formData.dropoffTime}
                onChange={(e) => setFormData({...formData, dropoffTime: e.target.value})}
              />
            </div>
          )}

          {/* Hours (only for hourly) */}
          {dropoffType === 'hourly-drop' && (
            <div className="form-item hourly-time">
              <label className="form-label fs-14 text-default mb-1">Hours</label>
              <h5>02 Hrs 10 Kms</h5>
            </div>
          )}
        </div>

        {/* Search Button */}
        <button type="submit" className="btn btn-primary search-btn rounded">
          Search
        </button>
      </div>
    </form>
  );
};

export default CarSearch;