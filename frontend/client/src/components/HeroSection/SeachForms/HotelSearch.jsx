import React, { useState } from 'react';

const HotelSearch = () => {
  const [formData, setFormData] = useState({
    location: 'Newyork',
    checkIn: '21-10-2025',
    checkOut: '23-10-2025',
    priceRange: '$1000 - $15000'
  });

  const [guests, setGuests] = useState({
    rooms: 1,
    adults: 2,
    children: 0,
    infants: 0
  });

  const [roomType, setRoomType] = useState('single');
  const [propertyType, setPropertyType] = useState('villa');

  const roomTypes = [
    { id: 'single', label: 'Single' },
    { id: 'double', label: 'Double' },
    { id: 'delux', label: 'Delux' },
    { id: 'suite', label: 'Suite' }
  ];

  const propertyTypes = [
    { id: 'villa', label: 'Villa' },
    { id: 'condo', label: 'Condo' },
    { id: 'cabin', label: 'Cabin' },
    { id: 'apartments', label: 'Apartments' }
  ];

  const priceRanges = [
    { range: '$500 - $2000', offers: 'Upto 65% offers' },
    { range: '$2001 - $5000', offers: 'Upto 40% offers' },
    { range: '$5000 - $8000', offers: 'Upto 35% offers' },
    { range: '$9000 - $11000', offers: 'Upto 20% offers' },
    { range: '$11000 - $15000', offers: 'Upto 10% offers' }
  ];

  const incrementGuest = (type) => {
    setGuests(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }));
  };

  const decrementGuest = (type) => {
    if (guests[type] > 0) {
      setGuests(prev => ({
        ...prev,
        [type]: prev[type] - 1
      }));
    }
  };

  return (
    <form action="hotel-grid.html">
      <div className="d-flex align-items-center justify-content-between flex-wrap mb-2">
        <h6 className="fw-medium fs-16 mb-2">Book Hotel - Villas, Apartments & more.</h6>
      </div>

      <div className="d-lg-flex">
        <div className="d-flex form-info">
          {/* Location */}
          <div className="form-item dropdown">
            <div data-bs-toggle="dropdown">
              <label className="form-label fs-14 text-default mb-1">
                City, Property name or Location
              </label>
              <input
                type="text"
                className="form-control"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
              />
              <p className="fs-12 mb-0">USA</p>
            </div>
          </div>

          {/* Check In */}
          <div className="form-item">
            <label className="form-label fs-14 text-default mb-1">Check In</label>
            <input
              type="text"
              className="form-control datetimepicker"
              value={formData.checkIn}
              onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
            />
            <p className="fs-12 mb-0">Monday</p>
          </div>

          {/* Check Out */}
          <div className="form-item">
            <label className="form-label fs-14 text-default mb-1">Check Out</label>
            <input
              type="text"
              className="form-control datetimepicker"
              value={formData.checkOut}
              onChange={(e) => setFormData({...formData, checkOut: e.target.value})}
            />
            <p className="fs-12 mb-0">Monday</p>
          </div>

          {/* Guests */}
          <div className="form-item dropdown">
            <div data-bs-toggle="dropdown">
              <label className="form-label fs-14 text-default mb-1">Guests</label>
              <h5>
                {guests.adults + guests.children + guests.infants}{' '}
                <span className="fw-normal fs-14">Persons</span>
              </h5>
              <p className="fs-12 mb-0">
                {guests.adults} Adult, {guests.rooms} Rooms
              </p>
            </div>

            <div className="dropdown-menu dropdown-menu-end dropdown-xl">
              <h5 className="mb-3">Select Travelers & Room</h5>
              
              {/* Guest Counter */}
              <div className="mb-3 border br-10 info-item pb-1">
                <div className="row">
                  {[
                    { type: 'rooms', label: 'Rooms' },
                    { type: 'adults', label: 'Adults' },
                    { type: 'children', label: 'Children', desc: '(2-12 Yrs)' },
                    { type: 'infants', label: 'Infants', desc: '(0-2 Yrs)' }
                  ].map((item) => (
                    <div key={item.type} className="col-md-12">
                      <div className="mb-3 d-flex align-items-center justify-content-between">
                        <label className="form-label text-gray-9 mb-2">
                          {item.label} {item.desc && (
                            <span className="text-default fw-normal">{item.desc}</span>
                          )}
                        </label>
                        <div className="custom-increment">
                          <div className="input-group">
                            <button
                              type="button"
                              className="quantity-left-minus btn btn-light btn-number"
                              onClick={() => decrementGuest(item.type)}
                            >
                              <i className="isax isax-minus"></i>
                            </button>
                            <input
                              type="text"
                              className="input-number"
                              value={guests[item.type]}
                              readOnly
                            />
                            <button
                              type="button"
                              className="quantity-right-plus btn btn-light btn-number"
                              onClick={() => incrementGuest(item.type)}
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

              {/* Room Type */}
              <div className="mb-3 border br-10 info-item pb-1">
                <h6 className="fs-16 fw-medium mb-2">Room Type</h6>
                <div className="d-flex align-items-center flex-wrap">
                  {roomTypes.map((room) => (
                    <div key={room.id} className="form-check me-3 mb-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="room"
                        id={room.id}
                        checked={roomType === room.id}
                        onChange={() => setRoomType(room.id)}
                      />
                      <label className="form-check-label" htmlFor={room.id}>
                        {room.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Property Type */}
              <div className="mb-3 border br-10 info-item pb-1">
                <h6 className="fs-16 fw-medium mb-2">Property Type</h6>
                <div className="d-flex align-items-center flex-wrap">
                  {propertyTypes.map((property) => (
                    <div key={property.id} className="form-check me-3 mb-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="property"
                        id={property.id}
                        checked={propertyType === property.id}
                        onChange={() => setPropertyType(property.id)}
                      />
                      <label className="form-check-label" htmlFor={property.id}>
                        {property.label}
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

          {/* Price Range */}
          <div className="form-item dropdown">
            <div data-bs-toggle="dropdown">
              <label className="form-label fs-14 text-default mb-1">Price per Night</label>
              <input
                type="text"
                className="form-control"
                value={formData.priceRange}
                onChange={(e) => setFormData({...formData, priceRange: e.target.value})}
                readOnly
              />
              <p className="fs-12 mb-0">20 Offers Available</p>
            </div>

            <div className="dropdown-menu dropdown-md p-0">
              <ul>
                {priceRanges.map((price, index) => (
                  <li key={index} className="border-bottom">
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setFormData({...formData, priceRange: price.range});
                      }}
                    >
                      <h6 className="fs-16 fw-medium">{price.range}</h6>
                      <p>{price.offers}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Search Button */}
        <button type="submit" className="btn btn-primary search-btn rounded">
          Search
        </button>
      </div>
    </form>
  );
};

export default HotelSearch;