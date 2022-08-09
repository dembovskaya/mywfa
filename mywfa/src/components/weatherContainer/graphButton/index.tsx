import useLocalStorage from "react-use-localstorage";
import {useRef} from "react";
import IconButton from "@mui/material/IconButton";
import QueryStatsIcon from "@mui/icons-material/QueryStats";

export interface GraphProps {
  id: string | undefined;
}

const Graph = ({ id }: GraphProps): JSX.Element | null => {
  const [storageItem, setStorageItem] = useLocalStorage(
    "graph",
    JSON.stringify([])
  );
  const storagedArray = useRef(JSON.parse(storageItem));
  const isGraph = storagedArray.current.includes(id);

  const handleToggleFavourite = (): void => {
    if (!isGraph) {
      storagedArray.current.push(id);
      setStorageItem(JSON.stringify(storagedArray.current));
    } else {
      const indexFavouritedId = storagedArray.current.indexOf(id);
      storagedArray.current.splice(indexFavouritedId, 1);
      setStorageItem(JSON.stringify(storagedArray.current));
    }
  };
  return (
    <IconButton onClick={handleToggleFavourite} sx={{color: isGraph ? 'primary.contrastText' : 'primary'}}>
        <QueryStatsIcon />
    </IconButton>
  );
};

export default Graph;
