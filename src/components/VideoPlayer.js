import React from 'react'
import ReactPlayer from 'react-player'

function VideoPlayer() {
    return (
        <div>
            <ReactPlayer controls url = 'https://www.youtube.com/watch?v=IRSVsCBtgnk'
                // onReady = {() => console.log('onReady Callback')}  
                // onStart = {() => console.log('onStart Callback')}
                // onPause = {() => console.log('onPause Callback')}
                // onEnded = {() => console.log('onEnded Callback')}
                // onError = {() => console.log('onError Callback')}
            />    
        </div>
    )
}

export default VideoPlayer
