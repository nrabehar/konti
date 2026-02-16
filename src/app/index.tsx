import { Camera, Home } from 'lucide-react-native';
import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Index() {
	return (
		<View className="dark text-foreground flex-1 items-center justify-center bg-background">
			<Home />
			<Camera />
			<View className="shadow p-4">
				<Text className="text-sm text-muted-foreground">
					Welcome to
				</Text>
			</View>
			<Button
				title="Click me"
				onPress={() => alert('Button pressed!')}
			/>
			<Text className="text-xl font-bold text-foreground">Jola</Text>
		</View>
	);
}
