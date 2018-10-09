import React from 'react'

const VideoLink = props => {
    return (
      <div className="container">
        <div className="notification is-primary">
        <button className="delete" onClick={props.hideNotification}></button>
        New to arxiv-sanity? Check out the <strong><a href="https://youtu.be/S2GY3gh6qC8" target="_blank">introduction video</a></strong>
        </div> 
     </div>
    );
}

export default VideoLink;