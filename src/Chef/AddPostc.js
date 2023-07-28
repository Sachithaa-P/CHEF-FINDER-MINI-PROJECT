import React from 'react';
import './AddPostc.css'

const AddPostc = () => {
  return (
    <div>
      <br></br><br></br>
      <div><h1>Booking Requests</h1></div>
      <br></br><br></br><br></br>
      <div className="req">
        <div id="fb">
          <div id="fb-top">
            <p><b>Booking Requests</b><span>Requests &bull; Settings</span></p>
          </div>
          <img src="https://w7.pngwing.com/pngs/121/148/png-transparent-follow-one-friend-request-person-profile-instagram-ui-flat-icon.png" height="100" width="100" alt="Image of woman" />
          <p id="info"><b>Natalie G.</b> <br></br><span>Event Organiser</span></p>
          <div id="button-block">
            <div id="confirm">Confirm</div>
            <div id="delete">Delete Request</div>
          </div>
        </div>
      </div>
      <div>
        <h1>
          Booking reference
        </h1>
        <br></br>
        {/* //box */}
        <div className='box'>
          <div id='box1'>
            <p>Rahul jain</p>
            <a href='#'>4 Mutual friends</a>
            <button>
              <p>Send Request</p>
            </button>
          </div>
          <div id='box2'>
            <p>Rahul jain</p>
            <a href='#'>4 Mutual friends</a>
            <button>
              <p>Send Request</p>
            </button>
          </div>
          <div id='box3'>
            <p>Rahul jain</p>
            <a href='#'>4 Mutual friends</a>
            <button>
              <p>Send Request</p>
            </button>
          </div>
          <div id='box4'>
            <p>Rahul jain</p>
            <a href='#'>4 Mutual friends</a>
            <button>
              <p>Send Request</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default AddPostc
