import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Description() {
  return (
  <div className="description-div">
      <h2>Danilov</h2>
      <p className="description__subtitle">Miner</p>
      <p className="description__website">(No website)</p>
      <div className="description__button-div">
        <button className="description__email-button">
          <FontAwesomeIcon icon={ faEnvelope } className="button__fa" />
          <span>Email</span>
        </button>
        <button className="description__linkedin-button">
          <FontAwesomeIcon icon={ faLinkedin } className="button__fa" />
          <span>LinkedIn</span>
        </button>
      </div>
      <div className="description__about-div">
        <h3>About</h3>
        <p className="description__paragraph">Hi, I am Danilov and I am a Miner. Currently working at Deep Rock Galactic, in Hoxxes.</p>
        <h3>Interests</h3>
        <p className="description__paragraph">I like Beer, Doretta and Mining. I also like drilling things.</p>
      </div>
  </div>
  )
}
