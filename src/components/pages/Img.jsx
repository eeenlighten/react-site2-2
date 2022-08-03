import React from 'react';
import ImgCont from '../includes/ImgCont';
import Contents from '../layout/Contents';
import axios from 'axios';

class Img extends React.Component {
  state = {
    imgtxt: [],
    imgtxt2: [0],
  };

  getImg = async () => {
    const {
      data: {
        data: {imgtxt}, data: {imgtxt2}
      }, 
    } = await axios.get("https://raw.githubusercontent.com/eeenlighten/-react2data/main/imgCont.json");
    this.setState({ imgtxt })
    this.setState({ imgtxt2 })
  };

  componentDidMount(){
    this.getImg();
  }

  render() {
    const {imgtxt} = this.state;
    const {imgtxt2} = this.state;
  return (
      <>
        <Contents>
          <ImgCont imgtxt={imgtxt} imgtxt2={imgtxt2} />
        </Contents>
      </>
    );
  }
}

export default Img;