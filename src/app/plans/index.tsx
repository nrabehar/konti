import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

export default function index() {
	const { themeClass } = useTheme();

	return (
		<View className={`${themeClass} flex-1 bg-background`}>
			<Text>index</Text>
		</View>
	);
}
