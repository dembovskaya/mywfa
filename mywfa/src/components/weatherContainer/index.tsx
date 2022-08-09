import { FC, useEffect } from "react";
import CurrentWeather from "./weatherCurrent";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { weatherFetch } from "../../store/actions/weatherAction";
import { getPosition } from "../../conversion";

const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const { city } = useAppSelector((state) => state.weather);

  useEffect(() => {
    dispatch(weatherFetch(city));
  }, [city, dispatch]);

  useEffect(() => {
    (async () => {
      const [tempLat, tempLon] = await getPosition();
      await dispatch(weatherFetch(`${tempLat},${tempLon}`));
    })();
  }, [dispatch]);

  return <CurrentWeather />;
};

export default MainPage;
