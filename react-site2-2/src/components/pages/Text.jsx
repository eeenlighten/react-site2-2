import React from 'react';
import Contents from '../layout/Contents';
import TextCont from '../includes/TextCont';
import axios from 'axios';

class Text extends React.Component {
  state = {
    texttxt: [],
    texttxt2: [0],
  };

  getText = async () => {
    const {
      data: {
        data: {texttxt}, data: {texttxt2}
      }, 
    } = await axios.get("https://raw.githubusercontent.com/eeenlighten/-react2data/main/text.json");
    this.setState({ texttxt })
    this.setState({ texttxt2 })
  };

  componentDidMount(){
    this.getText();
  }

  render() {
    const {texttxt} = this.state;
    const {texttxt2} = this.state;
  return (
      <>
        <Contents>
          <TextCont texttxt={texttxt} texttxt2={texttxt2} />
        </Contents>
      </>
    );
  }
}

export default Text;