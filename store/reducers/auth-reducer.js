import { AUTHENTICATE } from '../actions/auth-actions';

const initialState = {
  isAuth: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      console.log('Authenticate hit');
      return {
        isAuth: true,
      };

    default:
      return state;
  }
};
