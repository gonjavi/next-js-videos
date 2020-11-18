import Router from 'next/router';

const VideosList = props => {
 
  return (
    <div>
      <ul className="list-group">
        {
          props.videos.map(video => (
            <li key={video.id} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            onClick={e => Router.push('/videos/[id]', `/videos/${video.id}`)} >
              <div>
                <h5>{video.attributes.title}</h5>
                <p>{video.attributes.description}</p>
              </div>
              <iframe width="420" height="315"
                src={video.attributes.url}>
              </iframe>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default VideosList;