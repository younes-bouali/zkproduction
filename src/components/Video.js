import './Video.css'

const Video = () => {
  return (
    <div className='videoContainer' id='video'>
      <h1>Videos</h1>
      <div className='contentVideo'>
      <iframe width="450" height="300" src="https://www.youtube.com/embed/182zDtTaMDo" title="Interview de Zidani El Kheyer, réalisateur" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        <iframe width="450" height="300" src="https://www.youtube.com/embed/Y_dfF05gc9Y" title="Teaser PROVA Documentary Film" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
      </div>
    </div>
  )
}

export default Video
