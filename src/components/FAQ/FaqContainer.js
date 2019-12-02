import {connect} from 'react-redux';
import FAQ from './FAQ';
//import {createAction_moveCard} from '../../redux/cardsRedux';

const mapStateToProps = state => ({
  title: state.faq.title,
  description: state.faq.description,
  image: state.faq.image,
  titleText: state.faq.titleText,
});
/*
const mapDispatchToProps = dispatch => ({
  moveCard: payload => dispatch(createAction_moveCard(payload)),
}); */
export default connect(mapStateToProps)(FAQ);