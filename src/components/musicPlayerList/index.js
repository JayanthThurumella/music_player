import {Component} from 'react'
import {IoSearch} from 'react-icons/io5'

import PlayListCard from '../playListCard'
import './index.css'

class MusicPlayerList extends Component {
  constructor(props) {
    super(props)
    const {initialTracksList} = props
    this.state = {songData: initialTracksList, typeData: ''}
  }

  deleteButton = id => {
    const {songData} = this.state
    const modifiedData = songData.filter(eachSong => eachSong.id !== id)
    this.setState({songData: modifiedData})
  }

  searchInput = event => {
    this.setState({typeData: event.target.value})
  }

  render() {
    const {songData, typeData} = this.state
    const filterData = songData.filter(eachSong =>
      eachSong.name.toLowerCase().includes(typeData.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="banner-container">
          <h1 className="name">Ed Sheeran</h1>
          <p className="type">Singer</p>
        </div>
        <div className="search-container">
          <h1 className="heading">Songs Playlist</h1>
          <div className="search">
            <input
              placeholder="Search"
              type="search"
              value={typeData}
              onChange={this.searchInput}
            />
            <IoSearch className="icon" />
          </div>
        </div>
        {filterData.length === 0 ? (
          <div className="no-data-container">
            <p className="no-data-title">No Songs Found</p>
          </div>
        ) : (
          <ul className="playlist-container">
            {filterData.map(eachList => (
              <PlayListCard
                key={eachList.id}
                card={eachList}
                deleteButton={this.deleteButton}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default MusicPlayerList
