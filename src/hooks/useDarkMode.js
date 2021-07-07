import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (initialValues) => {
    const [darkMode, setDarkMode] = useLocalStorage('darkOn', initialValues)

    return([darkMode, setDarkMode])

}