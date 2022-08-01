import React from 'react';
import Contents from '../layout/Contents';
import CardCont from '../includes/CardCont';
import axios from 'axios';


class Card extends React.Component {
  state = {
    cardtxt: [0],
  };

  getCard = async () => {
    const {
      data: {
        data: { cardtxt },
      },
    } = await axios.get("https://raw.githubusercontent.com/eeenlighten/-react2data/main/card.json")
    this.setState({ cardtxt })
  };

  componentDidMount(){
    this.getCard();
  }

  render(){
    const { cardtxt } = this.state;    
  return (
    <>
      <Contents>
        <CardCont cardtxt={cardtxt} />
      </Contents>
    </>
  )
}
}


export default Card;
