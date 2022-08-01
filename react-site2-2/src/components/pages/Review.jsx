import React from 'react';
import Footer from '../layout/Footer';
import Contents from '../layout/Contents';
import ReviewCont from '../includes/ReviewCont';
import axios from 'axios';


class Review extends React.Component {
  state = {
    reviewtxt: [0],
    footertxt: [],
    footertxt2: [0],    
  };

  getReview = async () => {
    const {
      data: {
        data: { reviewtxt },
      },
    } = await axios.get("https://raw.githubusercontent.com/eeenlighten/-react2data/main/review.json")
    this.setState({ reviewtxt })
  };

  getFooter = async () => {
    const {
      data: {
        data: {footertxt}, data: {footertxt2}
      }, 
    } = await axios.get("https://raw.githubusercontent.com/eeenlighten/-react2data/main/footer.json");
    this.setState({ footertxt })
    this.setState({ footertxt2 })
  };

  componentDidMount(){
    this.getFooter();
    this.getReview();
  }



  render(){
    const { reviewtxt } = this.state;   
    const { footertxt } = this.state;   
    const { footertxt2 } = this.state;   
  return (
    <>
      <Contents>
        <ReviewCont reviewtxt={reviewtxt} />
      </Contents>
      <Footer footertxt={footertxt} footertxt2={footertxt2}/>
    </>
  )
}
}


export default Review;




