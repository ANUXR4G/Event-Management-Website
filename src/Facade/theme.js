import { useDispatch } from "react-redux";
import { setTheme } from "../Redux/actions/theme.action";

export function ChangeTheme () {
    const dispatch = useDispatch()
    return dispatch(setTheme(1))
}

