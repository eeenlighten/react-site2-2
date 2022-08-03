import React from 'react'

function Info({text}){
  return (
    <>
      <li>
        <a href="/">{text}</a>
      </li>
    </>
    )
  }

function Header({textInfor, textInfor2}) {
  return (
    <header id="headerType gmarket" className="gmarket">
        <div className="header__inner">
            <h1 className="header__logo">
                <a href="/">{textInfor2[0].title}</a>
            </h1>
            <nav className="header__menu">
                <h2 className="ir_so">메인 메뉴</h2>
                <ul>
                    {textInfor.map((txt) => (
                    <Info text={txt.text} key={txt.text}/>
                ))}   
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header