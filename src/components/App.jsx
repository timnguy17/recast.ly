import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '/src/lib/searchYouTube.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      currentVideo: exampleVideoData[0],
    };
  }

  componentDidMount() {
    this.getYouTubeVideos('puppies');
  }

  // create getYouTubeVideos method
  // invoke searchYouTube(query, cb)
  // cb should reassign the state

  getYouTubeVideos(query) {
    searchYouTube(query, (videos) =>
      this.setState({
        currentVideo: videos[0],
        videos: videos,
      })
    );
  }

  onVideoTitleClick (clickedVideo) {
    this.setState ({
      currentVideo: clickedVideo,
    });
  }
  onTextChange(event) {
    _.debounce(this.getYouTubeVideos, 500);
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
            <Search onChange={this.onTextChange.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em> view goes here</h5></div>
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em> view goes here</h5></div>
            <VideoList
              videos={this.state.videos}
              onClick={this.onVideoTitleClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
