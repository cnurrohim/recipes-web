import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitterSquare,
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom"

const SocialMediaLink = () => {
  return (
    <>
      <Link to="">
        <FontAwesomeIcon
          icon={faFacebookSquare}
          className="text-3xl text-blue-700"
        />
      </Link>

      <Link to="">
        <FontAwesomeIcon
          icon={faTwitterSquare}
          className="text-3xl text-sky-500"
        />
      </Link>
      <Link to="">
        <FontAwesomeIcon
          icon={faInstagramSquare}
          className="text-3xl text-pink-500"
        />
      </Link>
    </>
  )
}

export default SocialMediaLink
