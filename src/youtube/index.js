/* eslint-disable */
import { useEffect } from "react";
import useGoogleApi from "./useGoogleApi";

const YoutubeSource = (props) => {
  const gapi = useGoogleApi();
  const { search, setVideos } = props;

  useEffect(() => {
    try {
      if (search !== null && search !== '') {
        var arr_search = {
          part: 'snippet',
          type: 'video',
          maxResults: 3,
          q: search
        };
        gapi.client.youtube.search.list(arr_search)
          .then( response => {
            const ids = response.result.items.map((item) => {
              return item.id.videoId;
            });
            arr_search = {
              part: ['snippet','player'],
              id: ids
            }
            gapi.client.youtube.videos.list(arr_search)
              .then( response => {
                // Map response so its uniformal
                const videos = response.result.items.map((item) => {
                  return {
                    id: item.id,
                    title: item.snippet.title,
                    description: item.snippet.description,
                    thumbnail: item.snippet.thumbnails.default.url,
                    iframe: item.player.embedHtml
                  }
                });
                setVideos(videos);
              });
          })

      } else {
        setVideos(null);
      }
    } catch(e) {
      console.log('ERROR: ', e);
    }
  }, [search])

  return (
    <div>
    </div>
  );
}

export default YoutubeSource;