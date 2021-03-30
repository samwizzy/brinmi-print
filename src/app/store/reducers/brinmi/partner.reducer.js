import * as Actions from "../../actions/brinmi/partner.actions";

const initialState = {
  loading: false,
  partners: [],
  partnerDialog: {
    open: false,
    data: null,
  },
};

const partnerReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_PARTNERS: {
      return {
        ...state,
        partners: action.payload
      };
    }
    case Actions.CREATE_PARTNER: {
      return {
        ...state,
        loading: false
      };
    }
    case Actions.OPEN_PARTNER_WITH_US_DIALOG: {
      return {
        ...state,
        partnerDialog: { open: true, data: action.payload },
      };
    }
    case Actions.CLOSE_PARTNER_WITH_US_DIALOG: {
      return {
        ...state,
        partnerDialog: { open: false, data: null },
      };
    }
    default: {
      return state;
    }
  }
};

export default partnerReducer;
