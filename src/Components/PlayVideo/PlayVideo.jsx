import './PlayVideo.css'
import video from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

function PlayVideo() {
  return (
    <div className='play-video'>
        <video src={video} controls muted></video>
        <h3>Random title Lorem ipsum dolor sit.</h3>
        <div className="play-video-info">
            <p>1524 Views &bull; 2 days ago</p>
            <div>
                <span><img src={like} alt="like button" /> 125</span>
                <span><img src={dislike} alt="dislike button" /> 5</span>
                <span><img src={share} alt="share button" /> Share</span>
                <span><img src={save} alt="save button" /> Save</span>
            </div>
        </div>
        <hr />
        <div className='publisher'>
            <img src={jack} alt="profile pick of video uploader" />
            <div>
                <p>Great</p>
                <span>1M Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            <hr />
            <h4>150 Comments</h4>
            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>JAcj jj <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sed soluta itaque a cumque vero architecto tempora consequatur neque libero?</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>25</span>
                        <img src={dislike} alt="" />    
                    </div>
                </div>
            </div>
            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>JAcj jj <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sed soluta itaque a cumque vero architecto tempora consequatur neque libero?</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>25</span>
                        <img src={dislike} alt="" />    
                    </div>
                </div>
            </div>
            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>JAcj jj <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sed soluta itaque a cumque vero architecto tempora consequatur neque libero?</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>25</span>
                        <img src={dislike} alt="" />    
                    </div>
                </div>
            </div>
            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>JAcj jj <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sed soluta itaque a cumque vero architecto tempora consequatur neque libero?</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>25</span>
                        <img src={dislike} alt="" />    
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlayVideo