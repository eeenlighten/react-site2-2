import React from 'react';
import Contents from '../layout/Contents';
import BannerCont from '../includes/BannerCont';
import axios from 'axios';

class Banner extends React.Component {
  state = {
    bannertxt: [],
  };

  getbanner = async () => {
    const {
      data: {
        data: { bannertxt },
      },
    } = await axios.get("https://raw.githubusercontent.com/eeenlighten/-react2data/main/banner.json")
    this.setState({ bannertxt })
  };

  componentDidMount(){
    this.getbanner();
  }

  render() {
    const { bannertxt } = this.state;
    return (
      <>
        <Contents>
          <BannerCont bannertxt={bannertxt} />
        </Contents>
      </>
    )}
  }

export default Banner;
