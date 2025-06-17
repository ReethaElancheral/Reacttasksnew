export const fetchJoke = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_JOKE_REQUEST" });

    try {
      const res = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      if (!res.ok) throw new Error("Failed to fetch joke");

      const data = await res.json();
      dispatch({ type: "FETCH_JOKE_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_JOKE_FAILURE", payload: error.message });
    }
  };
};
