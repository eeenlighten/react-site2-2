import React from 'react'

  function Textinfo({title, desc1, desc2}){
    return (
      <>
        <div className="text">
            <h3>{title}</h3>
            <p>{desc1}<br/>{desc2}</p>
        </div>
    </>
    )
  }


function TextCont({texttxt, texttxt2}) {
  return (
    <section id="textType" className="gmarket"> 
        <div className="textType__wrap">
            <h2 className="ir_so"> 교육과정 </h2>    
            <div className="textType__text">                  
                <span>{texttxt2[0].title}</span>
                <h2>{texttxt2[0].desc1}<br/>{texttxt2[0].desc2}
                </h2>
                <p>{texttxt2[0].desc3}<br/>{texttxt2[0].desc4}</p>
            </div>
            <div className="textType__inner container">
                {texttxt.map((txt) => (
                    <Textinfo 
                    desc1={txt.desc1}
                    desc2={txt.desc2}
                    title={txt.title}
                    key={txt.id}/>
                ))} 
            </div>
        </div>    
    </section>
  )
}

export default TextCont