export const SET_MOBILE = "SET_MOBILE"

export const setMobile = (mobile) => (dispatch) => {
    dispatch({
      type: SET_MOBILE,
      payload: mobile,
    });
  };
