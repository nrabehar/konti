import React, {
	createContext,
	useContext,
	useMemo,
	useState,
} from 'react';
import { useColorScheme } from 'react-native';

type ThemeMode = 'light' | 'dark' | 'system';

type ThemeContextValue = {
	mode: ThemeMode;
	resolvedMode: 'light' | 'dark';
	setMode: (mode: ThemeMode) => void;
	toggleMode: () => void;
	isDark: boolean;
	themeClass: '' | 'dark';
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

type ThemeProviderProps = {
	children: React.ReactNode;
	initialMode?: ThemeMode;
};

export function ThemeProvider({
	children,
	initialMode = 'system',
}: ThemeProviderProps) {
	const systemMode = useColorScheme() ?? 'light';
	const [mode, setMode] = useState<ThemeMode>(initialMode);
	const resolvedMode: 'light' | 'dark' =
		mode === 'system'
			? systemMode === 'dark'
				? 'dark'
				: 'light'
			: mode;

	const toggleMode = () => {
		setMode((currentMode) => {
			if (currentMode === 'system') {
				return resolvedMode === 'dark' ? 'light' : 'dark';
			}
			return currentMode === 'dark' ? 'light' : 'dark';
		});
	};

	const value = useMemo(() => {
		const isDark = resolvedMode === 'dark';
		return {
			mode,
			resolvedMode,
			setMode,
			toggleMode,
			isDark,
			themeClass: (isDark ? 'dark' : '') as '' | 'dark',
		};
	}, [mode, resolvedMode]);

	return (
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useThemeContext() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error(
			'useThemeContext must be used within ThemeProvider',
		);
	}
	return context;
}
