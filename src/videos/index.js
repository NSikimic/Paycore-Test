import { useEffect, useState } from 'react';
import YoutubeSource from '../youtube';
import './videos.css'

const Videos = (props) => {
  const { search, source } = props;
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    try {
      console.log('LOADING VIDEOS', videos);
    } catch (e) {
      console.log('ERROR: ', e);
    }
  }, [videos]);

  return (
    <div className="video-wrapper">
      {source === 'Youtube' && <YoutubeSource search={search} setVideos={setVideos} />}
      {videos?.map( video => {
        return (
          <div className='video-item-wrapper' key={video.id}>  
            <div className='video-iframe' dangerouslySetInnerHTML={{__html: video.iframe}}></div>
            <div className='video-title'>{video.title}</div>
          </div>
        )
      })}
    </div>
  );
}

export default Videos;