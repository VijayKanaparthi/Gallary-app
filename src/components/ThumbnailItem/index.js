// Write your code here.
import './index.css'
const ThumbnailItem = props => {
  const {list, updateId, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = list

  const activeClassName = isActive ? 'active-container' : 'item-container'

  const Clicked = () => {
    updateId(id)
  }
  return (
    <li className={activeClassName}>
      <button className="button" onClick={Clicked}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}
export default ThumbnailItem
