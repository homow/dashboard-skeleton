import {useLocation} from "react-router-dom"

export default function useIsExactRoute(targetPath) {
    const {pathname} = useLocation()
    return pathname === targetPath
}