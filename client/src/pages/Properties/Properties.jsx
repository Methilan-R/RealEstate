import React from 'react'
import './Properties.css'
import SearchBar from '../../components/SearchBar/SearchBar'
import useProperties from '../../hooks/useProperties'
import {PuffLoader} from 'react-spinners'
import ProperyCard from '../../components/PropertyCard/ProperyCard'
const Properties = () => {
  const {data,isError,isLoading} = useProperties()
  
  if(isError){
    return(
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    )
  }

  if(isLoading){
    return(
      <div className="wrapper flexCenter" style={{height:"60vh"}}>
        <PuffLoader
        height="80"
        width="80"
        radius={1}
        color='#4066ff'
        aria-label='puff-Loading'
        />
      </div>
    )
  }
  return (
    <div className='wrapper'>
      <div className="flexColCenter paddings innerWidth properties-container">
        <SearchBar/>
        <div className="padding flexCenter properties">
          {
            data.map((card,i)=>(<ProperyCard card={card} key={i}/>))
          }
        </div>
      </div> 
    </div>
  )
}

export default Properties
