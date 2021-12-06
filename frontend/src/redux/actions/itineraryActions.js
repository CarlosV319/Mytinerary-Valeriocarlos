import axios from "axios";

const itineraryActions = {
  getItineraryByCity: (Id) => {
    return (dispatch, getState) => {
      axios
        .get("http://localhost:4000/api/city/itinerary/" + Id)
        .then((respuesta) =>
          dispatch({ type: "GET_ITINERARY", payload: respuesta.data })
        );
    };
  },
};

export default itineraryActions;
