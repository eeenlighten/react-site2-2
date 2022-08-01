import React from 'react';
import Header from '../layout/Header';
import Contents from '../layout/Contents';
import SliderCont from '../includes/SliderCont';
import axios from 'axios';

class Slider extends React.Component {
  state = {
    slidetxt: [],
    slidetxt2: [],
    textInfor: [],
    textInfor2: [0],
  };

  getSlider = async () => {
    const {
      data: {
        data: {slidetxt}, data: {slidetxt2}
      }, 
    } = await axios.get("https://raw.githubusercontent.com/eeenlighten/-react2data/main/slider.json");
    this.setState({ slidetxt })
    this.setState({ slidetxt2 })
  };

  getHeader = async () => {
    const {
      data: {
        data: {textInfor}, data: {textInfor2}
      }, 
    } = await axios.get("https://raw.githubusercontent.com/eeenlighten/-react2data/main/header.json");
    this.setState({ textInfor })
    this.setState({ textInfor2 })
  };  

  componentDidMount(){
    this.getHeader();
    this.getSlider();
  }

  render() {
    const {slidetxt} = this.state;
    const {slidetxt2} = this.state;
    const {textInfor} = this.state;
    const {textInfor2} = this.state;
  return (
      <>
      <Header textInfor={textInfor} textInfor2={textInfor2} />
        <Contents>
          <SliderCont slidetxt={slidetxt} slidetxt2={slidetxt2} />
        </Contents>
      </>
    );
  }
}

export default Slider;
