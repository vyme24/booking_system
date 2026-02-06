import React, { useState } from 'react';

const BusSearch = () => {
  const [tripType, setTripType] = useState('oneway');
  const [formData, setFormData] = useState({
    from: 'Newyork',
    to: 'Las Vegas',
    departure: '21-10-2024',
    return: '23-10-2024'
  });

  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 1,
    infants: 0
  });

  const [seatType, setSeatType] = useState('seater');

  const seatTypes = [
    { id: 'seater', label: 'Seater' },
    { id: 'sleeper', label: 'Sleeper' },
    { id: 'ac-sleeper', label: 'AC Sleeper' }
  ];

  const incrementPassenger = (type) => {
    setPassengers(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }));
  };

  const decrementPassenger = (type) => {
    if (passengers[type] > 0) {
      setPassengers(prev => ({
        ...prev,
        [type]: prev[type] - 1
      }));
    }
  };

  return (
    <form action="#">
      <div className="d-flex align-items-center justify-content-between flex-wrap mb-2">
        <div className="d-flex align-items-center">
          {['oneway', 'roundtrip'].map((type) => (
            <div key={type} className="form-check d-flex align-items-center me-3 mb-2">
              <input
                className="form-check-input mt-0"
                type="radio"
                name="tripType"
                id={type}
                value={type}
                checked={tripType === type}
                onChange={() => setTripType(type)}
              />
              <label className="form-check-label fs-14 ms-2" htmlFor={type}>
                {type === 'oneway' ? 'Oneway' : 'Round Trip'}
              </label>
            </div>
          ))}
        </div>
        <h6 className="fw-medium fs-16 mb-2">Low cost Buses in One simple search</h6>
      </div>

      {/* Normal Trip Form */}
      <div className="normal-trip">
        <div className="d-lg-flex">
          <div className="d-flex form-info">
            {/* From Location */}
            <div className="form-item dropdown">
              <div data-bs-toggle="dropdown">
                <label className="form-label fs-14 text-default mb-1">From</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.from}
                  onChange={(e) => setFormData({...formData, from: e.target.value})}
                />
                <p className="fs-12 mb-0">USA</p>
              </div>
            </div>

            {/* To Location */}
            <div className="form-item dropdown ps-2 ps-sm-3">
              <div data-bs-toggle="dropdown">
                <label className="form-label fs-14 text-default mb-1">To</label>
                <h5>{formData.to}</h5>
                <p className="fs-12 mb-0">USA</p>
                <span className="way-icon badge badge-primary rounded-pill translate-middle">
                  <i className="fa-solid fa-arrow-right-arrow-left"></i>
                </span>
              </div>
            </div>

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

            {/* Return Date (for round trip) */}
            {tripType === 'roundtrip' && (
              <div className="form-item round-drip">
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

            {/* Passengers */}
            <div className="form-item dropdown">
              <div data-bs-toggle="dropdown">
                <label className="form-label fs-14 text-default mb-1">Travellers</label>
                <h5>
                  {passengers.adults + passengers.children + passengers.infants}{' '}
                  <span className="fw-normal fs-14">Persons</span>
                </h5>
                <p className="fs-12 mb-0">
                  {passengers.adults} Adult, {passengers.children} children
                </p>
              </div>

              <div className="dropdown-menu dropdown-menu-end dropdown-xl">
                <h5 className="mb-3">Select Travelers & Class</h5>
                
                {/* Passenger Counter */}
                <div className="mb-3 border br-10 info-item pb-1">
                  <h6 className="fs-16 fw-medium mb-2">Travellers</h6>
                  <div className="row">
                    {[
                      { type: 'adults', label: 'Adults', desc: '(12+ Yrs)' },
                      { type: 'children', label: 'Childrens', desc: '(2-12 Yrs)' },
                      { type: 'infants', label: 'Infants', desc: '(0-2 Yrs)' }
                    ].map((item) => (
                      <div key={item.type} className="col-md-4">
                        <div className="mb-3">
                          <label className="form-label text-gray-9 mb-2">
                            {item.label} <span className="text-default fw-normal">{item.desc}</span>
                          </label>
                          <div className="custom-increment">
                            <div className="input-group">
                              <button
                                type="button"
                                className="quantity-left-minus btn btn-light btn-number"
                                onClick={() => decrementPassenger(item.type)}
                              >
                                <i className="isax isax-minus"></i>
                              </button>
                              <input
                                type="text"
                                className="input-number"
                                value={passengers[item.type]}
                                readOnly
                              />
                              <button
                                type="button"
                                className="quantity-right-plus btn btn-light btn-number"
                                onClick={() => incrementPassenger(item.type)}
                              >
                                <i className="isax isax-add"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Seat Type */}
                <div className="mb-3 border br-10 info-item pb-1">
                  <h6 className="fs-16 fw-medium mb-2">Seat Type</h6>
                  <div className="d-flex align-items-center flex-wrap">
                    {seatTypes.map((seat) => (
                      <div key={seat.id} className="form-check me-3 mb-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="seat-type"
                          id={seat.id}
                          checked={seatType === seat.id}
                          onChange={() => setSeatType(seat.id)}
                        />
                        <label className="form-check-label" htmlFor={seat.id}>
                          {seat.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="d-flex justify-content-end">
                  <button type="button" className="btn btn-light btn-sm me-2">
                    Cancel
                  </button>
                  <button type="button" className="btn btn-primary btn-sm">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <button type="submit" className="btn btn-primary search-btn rounded">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default BusSearch;