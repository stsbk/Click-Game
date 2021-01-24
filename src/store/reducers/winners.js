import { REQUEST_SENT } from '../constants/common';
import { WINNERS_FETCH, WINNERS_ADD } from '../constants/winners';

const initState = {
	winners: [],
	loaded: false,
};

export default function (state = initState, action) {
	switch (action.type) {
		case REQUEST_SENT:
			return {
				...state,
				...{
					loaded : false,
				}
			};

		case WINNERS_FETCH:
			return {
				...state,
				...{
					winners: action.data,
					loaded: true,
				}
			};


		case WINNERS_ADD:
			return {
				...state,
				...{
					winners : action.data,
					loaded : true,
				}
			};

		default:
			return state
	}
}
