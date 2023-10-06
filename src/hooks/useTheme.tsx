import { useContext } from "react";
import { ThemeCtx } from "../context/ThemeContex";

export default function useTheme() {
    return useContext(ThemeCtx);
}