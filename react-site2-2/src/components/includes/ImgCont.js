import React from 'react'

function Imginfo({title, desc, image1, image2}){
  return (
  <>
    <article className="imageType__sketch">
      <figure className="sketch__header">
        <img className="img" src={image1} alt={title} />
      </figure>
      <div className="sketch__body">
        <h3 className="title">{title}</h3>
        <p className="desc">{desc}</p>
        <a href="/" className="btn">
          <img className="img" src={image2} alt={title} />
        </a>
      </div>
    </article>
  </>
  )
}

function ImgCont({imgtxt2, imgtxt}) {
  return (
    <section id="imageType" className="font">
      <h2>{imgtxt2[0].title}</h2>
      <p>{imgtxt2[0].desc}</p>
      <div className="imageType__inner container">
         {imgtxt.map((txt) => (
                <Imginfo 
                title={txt.title}
                desc={txt.desc}
                image1={txt.image1} 
                image2={txt.image2}
                key={txt.id}/>
              ))}   
      </div>
    </section>
  )
}

export default ImgCont