import { FC } from 'react';
import {useAppDispatch} from '../../../hooks';
import {selectTempUnit} from "../../../store/actions/weatherAction";
import IconButton from "@mui/material/IconButton";

interface NavbarItemProps {
  isCelUnit: boolean;
  unit: string;
}
const DegreesUnit: FC<NavbarItemProps> = ({isCelUnit, unit}) => {
  const dispatch = useAppDispatch();
    if (isCelUnit) {
      localStorage.setItem('cel', "C")} else
    {
      localStorage.removeItem('cel')
    }

  return (
    <IconButton color="inherit" onClick={() => dispatch(selectTempUnit(isCelUnit))}>{unit}
    </IconButton>
  );
};

export default DegreesUnit;
