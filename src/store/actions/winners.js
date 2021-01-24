import { REQUEST_SENT } from "../constants/common";
import { WINNERS_FETCH, WINNERS_ADD } from "../constants/winners";
import WinnersApi from "../../services/api-worker/WinnersApi";

export function getWinners() {
	return function (dispatch) {
		dispatch({
			type: REQUEST_SENT,
		});
		(new WinnersApi()).getWinners().then(res => {
			return dispatch({
				type: WINNERS_FETCH,
				data: res
			});
		});
	};
}

export function addWinners(payload){
	return function (dispatch) {
		dispatch({
			type: REQUEST_SENT,
		});
		(new WinnersApi()).addWinners(payload).then(res => {
			return dispatch({
				type: WINNERS_ADD,
				data: res,
			});
		})
	};
}
