import {MdDelete} from 'react-icons/md'
import './index.css'

const PlayListCard = props => {
  const {card, deleteButton} = props

  return (
    <li>
      <div className="card-container">
        <img src={card.imageUrl} alt="track" />
        <div className="song-info-container">
          <p className="song-name">{card.name}</p>
          <p className="song-genre">{card.genre}</p>
        </div>
        <div className="remove-container">
          <button
            type="button"
            data-testid="delete"
            onClick={() => deleteButton(card.id)}
          >
            <MdDelete className="delete-icon" />
          </button>

          <p className="song-name">{card.duration}</p>
        </div>
      </div>
    </li>
  )
}

export default PlayListCard
