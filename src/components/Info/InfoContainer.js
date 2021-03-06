import {connect} from 'react-redux';
import Info from './Info';

const mapStateToProps = state => ({
  title: state.info.title,
  description: state.info.description,
  image: state.info.image,
  imageText: state.info.imageText,
});
/*
const mapDispatchToProps = dispatch => ({
  moveCard: payload => dispatch(createAction_moveCard(payload)),
});*/
export default connect(mapStateToProps)(Info);