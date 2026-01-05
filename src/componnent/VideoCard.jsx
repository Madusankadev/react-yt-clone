
import './VideoCard.css';

function VideoCard() {
    return (
        <article className='videoCard'>
            <div className='cardVideoContainer'>
                <video poster='./src/thumbs/thumb.jpg'>
                    <source src='./src/thumbs/video.mp4' type='video/mp4' />
                </video>
            </div>
            <div className='cardContent'>
                <div>
                    <img src="./src/assets/logo.png" alt="" />
                </div>
                <div>
                    <p className="title">How to Install windows 10</p>
                    <p className="channel">Tech World <div className="channelStatus"></div></p>
                    <p className='info'>
                        <span>78k views</span>.
                        <span>21 hours ago</span>
                    </p>
                </div>
            </div>
        </article>
    )
}

export default VideoCard;