import React from 'react'
import '../Styles/EditPage.css'
import video from '../images/beach.jpg'
import audio from '../images/audio.png'
import card from '../images/cardcomp.jpg'

function EditPageNavbar() {
  return (
    <div className='ednav'>
      <div className='editor'>
        <div className='upper'>
          <div className='nav-info'>
            <div className='one'>
              <h1 className='asset'>Assets</h1>
              <button className='upload'><i class="fa-solid fa-upload"></i></button>
            </div>
            <div className='two'>
              <div className='c1'>
                <div class="card">
                  <img src={audio} className='a' alt='audio'/>
                  <div class="card-body">
                    <p class="card-text">audio.mp3</p>
                  </div>
                </div>
              </div>
              <div className='c2'>
                <div class="card">
                  <img src={card} class="c" alt='card' />
                  <div class="card-body">
                    <p class="card-text">video.mpg</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='three'>
              <button className='addfile'><i class="fa-solid fa-square-plus"></i></button>
              <button className='delfile'><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
          <div className='videoed'>
            <div className='btns'>
              <input type='text' className='filename' placeholder=" Project Name" />
              <div className='icon'>
                <button type="button" class="btn btn-outline-light"><i class="fa-solid fa-rotate-left fa-xl"></i></button>
                <button type="button" class="btn btn-outline-light"><i class="fa-solid fa-rotate-right fa-xl"></i></button>
                <button type="button" class="btn btn-outline-light">Invite <i class="fa-solid fa-user-plus"></i></button>
                <button type="button" class="btn btn-outline-light">Done <i class="fa-solid fa-check"></i></button>
              </div>
            </div>
            <div className='edit'>
              <img className='vid' src={video} alt='vid'></img>
            </div>
          </div>
        </div>
        <div className='lower'>
          <div className='component'>
            <button className='split'><i class="fa-solid fa-scissors"></i> Split</button>
            <button className='add'><i class="fa-regular fa-plus"></i> Add Media</button>
            <button className='mic'><i class="fa-solid fa-microphone"></i> Voiceover</button>
            <button className='delete'><i class="fa-solid fa-trash"></i> Delete</button>
            <div className='vidbtn'>
              <button className='back'><i class="fa-solid fa-backward"></i></button>
              <button className='play'><i class="fa-solid fa-play"></i></button>
              <button className='pause'><i class="fa-solid fa-pause"></i></button>
              <button className='for'><i class="fa-solid fa-forward"></i></button>
            </div>
            <div className='options'>
              <button className='voldown'><i class="fa-solid fa-volume-off"></i></button>
              <button className='volup'><i class="fa-solid fa-volume-high"></i></button>
              <button className='zoomout'><i class="fa-solid fa-magnifying-glass-minus"></i></button>
              <button className='zoomin'><i class="fa-solid fa-magnifying-glass-plus"></i></button>
            </div>
          </div>
          <div className='track1'>
            <div className='block1'>
              <p className='t1'> Track 1</p>
            </div>
            <div className='block2'>
            </div>
          </div>
          <div className='track2'>
            <div className='b1'>
              <p className='t2'> Track 2</p>
            </div>
            <div className='b2'>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditPageNavbar
