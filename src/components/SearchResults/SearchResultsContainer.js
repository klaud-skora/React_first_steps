import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsFromAllLists} from '../../redux/cardsRedux';
import {createAction_changeSearchString} from '../../redux/searchStringRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsFromAllLists(state, props.match.params.searchString),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);