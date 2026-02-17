import { ThemeProvider } from '@/contexts/theme.context';
import { useTheme } from '@/hooks/useTheme';
import { Tabs } from 'expo-router';
import { HomeIcon, ListTodoIcon } from 'lucide-react-native';
import React from 'react';
import { View } from 'react-native';
import './global.css';

export default function RootLayout() {
	return (
		<ThemeProvider>
			<ThemedTabs />
		</ThemeProvider>
	);
}

function ThemedTabs() {
	const { themeClass } = useTheme();

	return (
		<View className={`${themeClass} flex-1 bg-card`}>
			<Tabs
				screenOptions={{
					headerShown: false,
					tabBarStyle: {
						backgroundColor: 'transparent',
						borderColor: 'transparent',
						borderWidth: 0,
					},
					tabBarHideOnKeyboard: true,
				}}
			>
				<Tabs.Screen
					name="index"
					options={{
						title: 'Home',
						tabBarIcon(props) {
							return (
								<HomeIcon
									size={24}
									className={`${props.focused ? 'text-primary' : 'text-foreground'}`}
								/>
							);
						},
					}}
				/>
				<Tabs.Screen
					name="plans/index"
					options={{
						title: 'Plans',
						tabBarIcon(props) {
							return (
								<ListTodoIcon
									size={24}
									className={`${props.focused ? 'text-primary' : 'text-foreground'}`}
								/>
							);
						},
					}}
				/>
			</Tabs>
		</View>
	);
}
