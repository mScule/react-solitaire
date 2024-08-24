import { useDispatch } from "react-redux";
import AppDispatch from "../types/AppDispatch";

const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default useAppDispatch;
