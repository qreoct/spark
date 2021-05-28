import picturesService from '../services/pictures';

export const GET_PICTURE = 'GET_PICTURE';
export const GET_PICTURE_SUCCESS = 'GET_PICTURE_SUCCESS';
export const GET_PICTURE_FAILURE = 'GET_PICTURE_FAILURE';

export const getPicture = () => ({
  type: GET_PICTURE,
});

export const getPictureSuccess = (pictures) => ({
  type: GET_PICTURE_SUCCESS,
  payload: pictures,
});

export const getPictureFailure = () => ({
  type: GET_PICTURE_FAILURE,
});

export function fetchPicture() {
  return async (dispatch) => {
    dispatch(getPicture());

    try {
      const res = await picturesService.getPictureFromUnsplash();

      const data = res.response;

      dispatch(getPictureSuccess(data));
    } catch (error) {
      dispatch(getPictureFailure());
    }
  };
}