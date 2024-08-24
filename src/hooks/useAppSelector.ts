import { useSelector } from "react-redux";
import AppState from "../types/AppState";

const useAppSelector = useSelector.withTypes<AppState>();

export default useAppSelector;
