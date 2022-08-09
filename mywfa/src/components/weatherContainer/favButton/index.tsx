import useLocalStorage from "react-use-localstorage";
import {useRef} from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export interface FavouriteProps {
  id: string | undefined;
  city: string | undefined;
}

const Favourite = ({ id, city }: FavouriteProps): JSX.Element | null => {
  const [storageItem, setStorageItem] = useLocalStorage(
    "fav",
    JSON.stringify([])
  );
  const storagedArray = useRef(JSON.parse(storageItem));
  const isFavourited = storagedArray.current.includes(id, city);

  const handleToggleFavourite = (): void => {
    if (!isFavourited) {
      storagedArray.current.push(id, city);
      setStorageItem(JSON.stringify(storagedArray.current));
    } else {
      const indexFavouritedId = storagedArray.current.indexOf(id);
      storagedArray.current.splice(indexFavouritedId, 1);
      setStorageItem(JSON.stringify(storagedArray.current));
    }
  };
  return (
    <IconButton onClick={handleToggleFavourite}>
      {isFavourited
        ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  );
};

export default Favourite;
