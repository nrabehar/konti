import { useThemeContext } from '../contexts/theme.context';

export function useTheme() {
	const context = useThemeContext();
	return context;
}
