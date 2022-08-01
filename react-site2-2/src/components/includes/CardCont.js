import React from 'react'


function CardCont({cardtxt}) {
  return (
    <section id="cardType" className="card__wrap section gmarket">
        <h2>{cardtxt[0].title1}</h2>
        <p>{cardtxt[0].desc}<br />{cardtxt[0].desc1}</p>
        <div className="card__inner container">
            <article className="card">
                <figure className="card__header">
                    <img className="img" src={cardtxt[0].image1} alt={cardtxt[0].title1} />
                </figure>
                <div className="card__body card_color01">
                    <h3 className="title">{cardtxt[0].title2}</h3>
                    <a className="btn" href="/">{cardtxt[0].text2}</a>
                </div>
            </article>
            <article className="card">
                <figure className="card__header ">
                    <img className="img" src={cardtxt[0].image2} alt={cardtxt[0].title1}/>
                </figure>
                <div className="card__body card_color02">
                    <h3 className="title">{cardtxt[0].title3}</h3>
                    <a className="btn" href="/">{cardtxt[0].text2}</a>
                </div>
            </article>
            <article className="card">
                <figure className="card__header">
                    <img className="img" src={cardtxt[0].image3} alt={cardtxt[0].title1} />
                </figure>
                <div className="card__body card_color03">
                    <h3 className="title">{cardtxt[0].title4}</h3>
                    <a className="btn" href="/">{cardtxt[0].text2}</a>
                </div>
            </article>
        </div>
    </section>
  )
}

export default CardCont