/* eslint-disable no-undef */
import * as actionTypes from './actionTypes';
import * as api from '../../api/api';

export const setIsContentLoading = isContentLoading => ({
  type: actionTypes.SET_CONTENT_LOADING,
  payload: {
    isContentLoading,
  },
});

export const loadForms = forms => ({
  type: actionTypes.LOAD_FORMS,
  payload: {
    forms,
  },
});

export const getForms = () => (
  (dispatch) => {
    window.JF.getForms((response) => {
      dispatch(loadForms(response));
    });
  }
);

export const selectForm = selectedForm => ({
  type: actionTypes.SELECT_FORM,
  payload: {
    selectedForm,
  },
});

export const setChartBackgroundColor = (index, color) => ({
  type: actionTypes.SET_CHART_BACKGROUND_COLOR,
  payload: {
    index,
    color,
  },
});

export const setChartBackgroundColors = colors => ({
  type: actionTypes.SET_CHART_BACKGROUND_COLORS,
  payload: {
    colors,
  },
});
