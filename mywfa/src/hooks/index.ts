import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useCallback, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export const useMobile = () => useMediaQuery(useTheme().breakpoints.down("md"));
export const useDesktop = () => useMediaQuery(useTheme().breakpoints.up("md"));

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useToggle = (initialState: boolean = false): [boolean, any] => {
  const [state, setState] = useState<boolean>(initialState);
  const toggle = useCallback((): void => setState((state) => !state), []);

  return [state, toggle];
};

export const checkIsLoggedIn = () => !!sessionStorage.getItem("id");
