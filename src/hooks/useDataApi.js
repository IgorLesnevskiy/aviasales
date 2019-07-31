import {useState, useEffect, useReducer} from "react";
import axios from "axios";

const dataFetchReducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_INIT':
			return {
				...state,
				isLoading: true,
				isFetched: false,
				isError: false
			};
		case 'FETCH_SUCCESS':
			debugger;
			return {
				...state,
				isLoading: false,
				isError: false,
				isFetched: true,
				data: action.payload,
			};
		case 'FETCH_FAILURE':
			return {
				...state,
				isFetched: true,
				isLoading: false,
				isError: true,
			};
		default:
			throw new Error();
	}
};

const useDataApi = (initialUrl, initialData) => {
	const [url, setUrl] = useState(initialUrl);

	const [state, dispatch] = useReducer(dataFetchReducer, {
		isLoading: false,
		isError: false,
		isFetched: false,
		data: initialData,
	});

	useEffect(() => {
		let didCancel = false;

		const fetchData = async () => {
			dispatch({ type: 'FETCH_INIT' });

			try {
				const result = await axios(url);

				if (!didCancel) {
					dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
				}
			} catch (error) {
				if (!didCancel) {
					dispatch({ type: 'FETCH_FAILURE' });
				}
			}
		};

		fetchData();

		return () => {
			didCancel = true;
		};
	}, [url]);

	return [state, setUrl];
};

export default useDataApi;