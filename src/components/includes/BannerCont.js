import React from 'react'

// const bannertxt = [
//   {
//     text1: "배너 영역",
//     title: "PET ACADEMY",
//     desc1: "취업과 창업에 강한 PET ACADEMY",
//     desc2: "소수 정예 교육으로 개인 수준에 따른 맞춤형 교육을 진행합니다.",
//     text2: "바로 가기",
//     id: 0
//   }
// ]

function BannerInfo({id, text1, text2, desc1, desc2, title}){
  return (
    <>
        <h2 className="ir_so">{text1}</h2>
        <div className="banner__inner">
            <h3 className="banner__title">{title}</h3>
            <p className="banner__desc">
                {desc1}<br />{desc2}
                <a href="/">{text2}</a>
            </p>
        </div>
     </>
  )
}

function BannerCont({bannertxt}) {
  return (
    <section id="bannerType" className="banner__wrap section nexon">
          {bannertxt.map((txt) => (
            <BannerInfo
              key = {txt.id}
              text1 = {txt.text1}
              title = {txt.title}
              desc1 = {txt.desc1}
              desc2 = {txt.desc2}
              text2 = {txt.text2}
            />
          ))}
    </section>
  )
}

export default BannerCont