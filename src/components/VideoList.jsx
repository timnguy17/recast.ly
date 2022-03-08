import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => (

  <div className="video-list">
    {props.videos.map( video =>
      // key={props.videos.video.id.videoId}
      <VideoListEntry video={video} key={video.id.videoId}/>
    )}
    {/* <div><p>{console.log(props.videos)}</p></div> */}
    {/* <VideoListEntry video='exampleVideoData[0]'/> */}
    {/* <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> test</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div> */}
  </div>

  //<div className="video-list">


);



// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;


/*
class VideoList extends React.Component {
  coonstructor (props) {
    super(props);
  }

  render() {

    return (

    )
  }
}
*/