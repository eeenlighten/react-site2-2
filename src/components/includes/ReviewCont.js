import React from 'react'

const reviewtxt = [
    {
        title: "수업 후기",
        text1: "수강생들의 솔직한 후기를 보실 수 있습니다.",
        desc1: "20, 30대를 함께 보낸 아이와 이별 후 사실 죄책감이 없진 않았어요. 강의 듣고 제가 아이에게 최선을 다했다는 위로. 아직 아이 유골을 데리고 있는데 이것 또한 왠지 잘못하는 것 같은 생각을 가지고 있었고, 아이를 보내줄 수 있는 시간은 정해진것이 아니기에 준비되면 보내도 되는구나라는 조언을 처음듣고 위안이 되었습니다. 감사합니다.",
        desc2: "이태용",
        desc3: "펫아카데미 5기",
        desc4: "자세히 보기",
        desc5: "반려견에게 집에서 간단히 어렵지 않게 만들 수 있는 간식 레시피가 다양해서 손 쉽게 만들 수 있는 수업을 듣게 되어 유익한 시간(수업)이 었습니다! 계속 만들 수 있는 수업이 이어질 수 있도록 했으면 좋겠습니다~",
        desc6: "김희진",
        desc7: "펫아카데미 17기",
        desc8: "너무 모르고 광범위 했던 교육이라 생각했는데 조금이나마 알 수 있었고 더 공부를 해야겠다고 생각이 들었습니다. 이론과 실습을 함께 할 수 있어 좋았고 교육하시는 교수님들도 쉽게 설명해 주셔서 좋았습니다.",
        desc9: "정승연",
        desc10: "펫아카데미 5기",
        image1: "images/smile1.png",
        image2: "images/smile2.png",
        image3: "images/smile3.png",
        image4: "images/star.png"
    }
]



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