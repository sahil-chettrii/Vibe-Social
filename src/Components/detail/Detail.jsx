import React from 'react'
import "./Detail.css"

const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>sahil chettri</h2>
        <p>the developer of the app SuperAdmin</p>
      </div>

      <div className="info">
        <div className="option">
          <div className="title">
            <span>chat settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
      </div>

      <div className="info">
        <div className="option">
          <div className="title">
            <span>privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
      </div>

      <div className="info">
        <div className="option">
          <div className="title">
            <span>shared photos</span>
            <img src="./arrowUp.png" alt="" />
          </div>
            <div className="photos">
            <div className="Photoitem">
              <img src="https://www.pexels.com/photo/a-gray-honda-civic-parked-in-a-park-25637367/" alt="" />
                  <span>my fav car </span>
            </div>
            <img src="download.png" alt="" />
          </div>
        </div>
      </div>

      <div className="info">
        <div className="option">
          <div className="title">
            <span>shared files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
      </div>

      <div className="info">
        <div className="option">
          <div className="title">
            <span>block user</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail