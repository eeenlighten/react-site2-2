import React from 'react'
  
  function Footerinfo({title, text1, text2, text3, text4, text5, text6}){
    return (
      <>
      <div>
        <h3>{title}</h3>
        <ul>
          <li>
            <a href="/">{text1}</a>
          </li>
          <li>
            <a href="/">{text2}</a>
          </li>
          <li>
            <a href="/">{text3}</a>
          </li>
          <li>
            <a href="/">{text4}</a>
          </li>
          <li>
            <a href="/">{text5}</a>
          </li>   
          <li>
            <a href="/">{text6}</a>
          </li>                 
        </ul>
      </div>
     </>
     )
  }


function Footer({footertxt, footertxt2}) {
  return (
    <footer id="footerType" className="footer__wrap section gmarket">
        <h2 className="ir_so">푸터 영역</h2>
        <div className="footer__inner container">
            <div className="footer__wrap">
                <div className="footer_left">
                    <div className="footer_info">
                        <h3>{footertxt2[0].title}</h3>
                        <ul>
                            <li>{footertxt2[0].desc1}</li>
                            <li>{footertxt2[0].desc2}</li>
                            <li>{footertxt2[0].desc3}</li>
                        </ul>
                    </div>
                    <div className="icon">
                        <ul>
                            <li><a href="/"><img className="img" src={footertxt2[0].image1}  alt="이미지1"/></a></li>
                            <li><a href="/"><img className="img" src={footertxt2[0].image2}  alt="이미지2"/></a></li>
                            <li><a href="/"><img className="img" src={footertxt2[0].image3}  alt="이미지3"/></a></li>
                            <li><a href="/"><img className="img" src={footertxt2[0].image4}  alt="이미지4"/></a></li>   
                            <li><a href="/"><img className="img" src={footertxt2[0].image5}  alt="이미지5"/></a></li>               
                        </ul>
                    </div>
                </div>
                <div className="footer__menu">
                    {footertxt.map((txt) => (
                    <Footerinfo 
                    title = {txt.title}
                    text1 = {txt.text1}
                    text2 = {txt.text2}
                    text3 = {txt.text3}
                    text4 = {txt.text4}
                    text5 = {txt.text5}
                    text6 = {txt.text6}
                    key = {txt.text1}
                    />
                    ))}   
                </div> 
            </div>
            <address className="footer__address">
                Copyright 2022. All Rights Reserved. - Designde by JS
            </address>
        </div>
    </footer>
  )
}

export default Footer