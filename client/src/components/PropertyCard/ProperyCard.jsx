import React from 'react'
import './PropertyCard.css'
import { AiFillHeart } from "react-icons/ai";

const ProperyCard = ({card}) => {
  return (
    <div className="flexColStart r-card">
                <img src={card.image} alt="home" />
                <AiFillHeart size={24} color='white'/>
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.title}</span>
                <span className="secondaryText">{card.description}</span>
              </div>
  )
}

export default ProperyCard
