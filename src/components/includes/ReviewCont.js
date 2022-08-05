import React from 'react'

function ReviewCont({reviewtxt}) {
  return (
    <section id="reviewType" className="gmarket">
        <h2>{reviewtxt[0].title}</h2>
        <p>{reviewtxt[0].text1}</p>
        <div className="review__inner container">
            <div className="review__box">
                <div className="desc">
                {reviewtxt[0].desc1} 
                </div>
                <div className="title">
                    <span><img className="img" src={reviewtxt[0].image1} alt="이미지1" /></span>
                    <p>{reviewtxt[0].desc2}<span>&nbsp;{reviewtxt[0].desc3}</span></p>
                    <div className="star">
                        <figure>
                        <img className="img" src={reviewtxt[0].image4} alt="이미지2" />
                        </figure>
                    </div>
                </div>
                <a href="/" className="btn">
                {reviewtxt[0].desc4}
                </a>
            </div>
            <div className="review__box">
                <div className="desc">
                {reviewtxt[0].desc5}            
                </div>
                <div className="title">
                    <span><img className="img" src={reviewtxt[0].image2} alt="이미지3" /></span>
                    <p>{reviewtxt[0].desc6}<span>&nbsp;{reviewtxt[0].desc7}</span></p>
                    <div className="star">
                        <figure>
                        <img className="img" src={reviewtxt[0].image4} alt="이미지4" />
                        </figure>
                    </div>
                </div>
                <a href="/" className="btn">
                {reviewtxt[0].desc4}
                </a>
            </div>
            <div className="review__box">
                <div className="desc">
                {reviewtxt[0].desc8}
                </div>
                <div className="title">
                    <span><img className="img" src={reviewtxt[0].image3} alt="이미지5" /></span>
                    <p>{reviewtxt[0].desc9}<span>&nbsp;{reviewtxt[0].desc10}</span></p>
                    <div className="star">
                        <figure>
                        <img className="img" src={reviewtxt[0].image4} alt="이미지6" />
                        </figure>
                    </div>
                </div>
                <a href="/" className="btn">
                {reviewtxt[0].desc4}
                </a>
            </div>
        </div>
    </section>
  )
}

export default ReviewCont