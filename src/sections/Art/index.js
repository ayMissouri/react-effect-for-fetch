import { useEffect, useState } from "react"


function ArtsSection() {
  const [listOfArtworks, setListOfArtworks] = useState([])

  useEffect(()=>{
    fetch(`https://api.artic.edu/api/v1/artworks?limit=50`)
      .then(res=>res.json())
      .then(data=>setListOfArtworks(data.data))
  })

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {listOfArtworks.map((artwork, index)=>(
            <li key={index}>
              <div className="frame">
                <img 
                src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`} 
                alt={artwork.title} />
              </div>
              <h3>{artwork.title}</h3>
              <p>Artist: {artwork.artist_title}</p>
              <h4>Artist Subjects:</h4>
              <ul>
                {artwork.subject_titles.map((subject, index)=>(
                  <li key={index}>{subject}</li>
                ))}
                {artwork.subject_titles.length < 1 && <li>N/A</li>}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ArtsSection
