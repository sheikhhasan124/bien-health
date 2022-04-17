import React from 'react';

const Booking = () => {
    return (
        <div className='form-section'>
        <div className='form-container'>
      <div>
      <h2 className='form-title'>Get Appointment</h2>
         <form>
               <div className="input-group">
                  <input type="text" name="name" id="" placeholder='Name' required />
               </div>
               <div className="input-group">
                  <input type="email" name="email" id="" placeholder='Email' required />
               </div>
               <div className="input-group">
                  <input type="text" name="address" id="" placeholder='Address' required />
               </div>
               <div className="input-group">
                  <input type="text" name="phone" id="" placeholder='Phone Number' required />
               </div>
               
               <input className='submit-btn' type="submit" value="Submit" />
               
         </form>
        
         
         
      </div>
   </div>
   </div>
    );
};

export default Booking;