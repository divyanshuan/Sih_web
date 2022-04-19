import '../styles/body.css';
import bgVideo from '../../assets/202081.mp4'

function Body() {
  return (
    <div>
      <div className="container">
            <video className="head_video" autoPlay muted loop>
            <source src={bgVideo} type="video/mp4"/>
            </video> 
      </div>

    </div>
  );
}

export default Body;
