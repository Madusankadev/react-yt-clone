
import './App.css'

import VideoCard from './componnent/VideoCard'
import SideRow from './componnent/SideRow'

function App() {

  return (
    <div className='container'>
      <header className='header container'>
        <img src="./src/assets/yt.png" alt="logo" height={30} />
        <div className='headerInputs'>
          <div className='videoSearch'>
            <input type="text" />
            <div className="searchIcon"></div>
          </div>
          <div className="voiceSearch"><img src="" alt="" /></div>
        </div>
        <div className='headerOp'>
          <button className='createBtn'>+ Create</button>
          <div className='notifyBtn'><div className="notifyCount">2</div></div>
          <div className='profileBtn'>D</div>
        </div>
      </header>
      <div className='content'>
        <div className="sideContainer">
          <SideRow />
          <SideRow />
          <SideRow />
          <SideRow />
          <SideRow />
        </div>
        <div className="cardContainer">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </div>
    </div>
  )
}

export default App
