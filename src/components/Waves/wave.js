import React from 'react'

const Waves = () => {
  return (
    <>
      <div className="waveWrapper waveAnimation">
        <div className="waveWrapperInner bgTop">
          <div className="wave waveTop" style={{ backgroundImage: "url('/images/wave-top.png')" }}></div>
        </div>
        <div className="waveWrapperInner bgMiddle">
          <div className="wave waveMiddle" style={{ backgroundImage: "url('/images/wave-top.png')" }}></div>
        </div>
        <div className="waveWrapperInner bgBottom">
          <div className="wave waveBottom" style={{ backgroundImage: "url('/images/wave-top.png')" }}></div>
        </div>
      </div>
      <button className="learn-more">
        <span className="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <span className="button-text">Learn More</span>
      </button>
    </>
  )
}

export default Waves;