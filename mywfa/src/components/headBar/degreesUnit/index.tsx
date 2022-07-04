import { FC } from 'react';
import { useAppDispatch } from '../../../hooks';
import {selectTempUnit} from "../../../store/actions/weatherAction";
import {Button} from "@mui/material";

interface NavbarItemProps {
  isCelUnit: boolean;
  unit: string;
}
const DegreesUnit: FC<NavbarItemProps> = ({isCelUnit, unit}) => {
  const dispatch = useAppDispatch();

  return (
    <Button variant="outlined" color="success"
            onClick={() => dispatch(selectTempUnit(isCelUnit))}
    >
      {unit}
    </Button>
  );
};

export default DegreesUnit;
