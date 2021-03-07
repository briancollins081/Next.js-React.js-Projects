import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeeting) => {},
  removeFavorite: (meetingId) => {},
  itemIsFavorite: (meetingId) => {},
});

export const FavoritesContextProvider = ({ children }) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (favoriteMeeting) => {
    setUserFavorites((previousUserFavorites) => {
      return previousUserFavorites.concat(favoriteMeeting);
    });
  };
  const removeFavoriteHandler = (meetingId) => {
    setUserFavorites((previousUserFavorites) => {
      return previousUserFavorites.filter((m) => m.id !== meetingId);
    });
  };

  const itemIsFavoriteHandler = (meetingId) => {
    return userFavorites.some((m) => m.id === meetingId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
