import { useReducer } from "react";

/** Type Definition */
// reducer's state
type TViewState = {
	expenses: boolean;
	incomes: boolean;
	savings: boolean;
	statistic: boolean;
};
// reducer actions
type TViewActionType = keyof TViewState;
type TViewAction = { type: TViewActionType; payload: boolean };

// reducer
type TReducer = (state: TViewState, action: TViewAction) => TViewState;

/** Reducer Definition */
// initial state
const initialStateViewComponent: TViewState = {
	expenses: true,
	incomes: true,
	savings: true,
	statistic: true,
};

// reducer function
const reducerViewComponent: TReducer = (state, action) => {
	let dataReturn: TViewState | {} = {};
	switch (action.type) {
		case "expenses":
			dataReturn = { ...state, expenses: !state.expenses };
			break;
		case "incomes":
			dataReturn = { ...state, incomes: !state.incomes };
			break;
		case "savings":
			dataReturn = { ...state, savings: !state.savings };
			break;
		case "statistic":
			dataReturn = { ...state, statistic: !state.statistic };
			break;
	}
	return dataReturn as TViewState;
};

/** Export Main Module - Custom Hooks */
export const useDashboardReducer = () => {
	const [viewComponent, dispatchViewComponent] = useReducer(
		reducerViewComponent,
		initialStateViewComponent
	);
	const onToggle = (action: TViewActionType) =>
		dispatchViewComponent({ type: action, payload: !viewComponent[action] });

	// action buttons (reducer dispatch trigger)
	const actionButtons = Object.keys(
		initialStateViewComponent
	) as (keyof TViewState)[];
	return { viewComponent, onToggle, actionButtons };
};
