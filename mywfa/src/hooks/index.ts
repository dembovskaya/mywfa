import { TypedUseSelectorHook, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import {AppDispatch, RootState} from "../store";

export const useMobile = () => useMediaQuery(useTheme().breakpoints.down("md"));
export const useDesktop = () => useMediaQuery(useTheme().breakpoints.up("md"));

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
