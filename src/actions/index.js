// eslint-disable-next-line import/prefer-default-export
export const setFavorite = (payload) => ({
  type: 'SET_FAVORETE',
  payload,
});

export const deleteFavorite = (payload) => ({
  type: 'DELETE_FAVORETE',
  payload,
});
