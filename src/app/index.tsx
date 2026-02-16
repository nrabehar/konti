import {
	ArrowUpRightIcon,
	Bell,
	ChevronRightIcon,
	DownloadIcon,
} from 'lucide-react-native';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
	return (
		<>
			<SafeAreaView className="dark text-foreground flex-1 items-center justify-center bg-muted">
				<View className="w-full h-screen items-center gap-4">
					<View className="w-full flex flex-row justify-between items-center px-4 py-2">
						<View className="flex-row gap-2">
							{/* Avatar */}
							<View className="w-12 h-12 rounded-full bg-linear-to-bl from-sky-500 to-indigo-500 items-center justify-center">
								<Text className="text-white text-2xl font-bold">
									J
								</Text>
							</View>
							{/* Account name and greating */}
							<View>
								<Text className="text-base font-medium text-foreground">
									Jola
								</Text>
								<Text className="text-sm text-muted-foreground">
									Good morning
								</Text>
							</View>
						</View>
						<View>
							{/* Notification button */}
							<TouchableOpacity className="w-11 h-11 rounded-full bg-border items-center justify-center">
								{/* indicator */}
								<View className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500" />
								{/* Icon */}
								<Bell size={24} />
							</TouchableOpacity>
						</View>
					</View>
					{/* Dashboard */}
					<View className="w-full px-4">
						{/* Budget Card */}
						<View className="w-full bg-popover rounded-lg p-4 gap-2 drop-shadow-xl">
							<Text className="text-sm text-muted-foreground">
								My Budget
							</Text>
							<Text className="text-2xl font-bold text-foreground">
								$1.200,00
							</Text>
							<View className="flex-row gap-2 w-full mt-2">
								<TouchableOpacity className="px-3 py-1.5 bg-primary rounded flex-1 flex-row gap-2 items-center justify-center">
									<DownloadIcon
										className="text-white"
										size={20}
									/>
									<Text className="text-sm text-white">
										Add income
									</Text>
								</TouchableOpacity>
								<TouchableOpacity className="px-3 py-1.5 bg-secondary rounded flex-1 flex-row gap-2 items-center justify-center">
									<ArrowUpRightIcon
										className="text-secondary-foreground"
										size={20}
									/>
									<Text className="text-sm text-secondary-foreground">
										Add spending
									</Text>
								</TouchableOpacity>
							</View>
						</View>
						{/* Overview */}
						<View className="flex-row gap-4">
							{/* Income Card */}
							<View className="flex-1 bg-popover rounded-lg p-4 gap-2 drop-shadow-xl mt-4">
								<Text className="text-sm text-muted-foreground">
									Income
								</Text>
								<Text className="text-2xl font-bold text-foreground">
									$1.200,00
								</Text>
							</View>
							{/* Spending Card */}
							<View className="flex-1 bg-popover rounded-lg p-4 gap-2 drop-shadow-xl mt-4">
								<Text className="text-sm text-muted-foreground">
									Spending
								</Text>
								<Text className="text-2xl font-bold text-foreground">
									$800,00
								</Text>
							</View>
						</View>
					</View>
					{/* Plans */}
					<ScrollView className="w-full px-4 bg-background rounded-t-xl">
						{/* Plans header */}
						<View className="flex-row items-center justify-between py-4">
							<Text className="text-lg font-bold text-foreground">
								My Plans
							</Text>
							<TouchableOpacity className="flex-row gap-0.5 items-center">
								<Text className="text-sm text-primary">
									See more
								</Text>
								<ChevronRightIcon
									className="text-primary"
									size={18}
								/>
							</TouchableOpacity>
						</View>
						{/* Plan cards */}
						<View className="gap-4 mb-4">
							{/* Plan card */}
							<View className="flex-1 bg-popover rounded-lg p-4 gap-2 border border-border drop-shadow-xl">
								{/* category */}
								<Text className="text-sm text-muted-foreground">
									#Travel
								</Text>
								{/* title */}
								<Text className="text-medium text-foreground">
									Trip to Paris
								</Text>
								{/* Progressbar */}
								<View className="w-full h-2 bg-accent rounded-full mt-2">
									<View className="w-1/2 h-full bg-primary rounded-full" />
								</View>
								{/* Values */}
								<View className="flex-row items-center justify-between mt-2">
									<Text className="text-sm text-muted-foreground">
										$400,00 / $800,00
									</Text>
									<Text className="text-sm text-muted-foreground">
										50%
									</Text>
								</View>
							</View>
						</View>
					</ScrollView>
				</View>
			</SafeAreaView>
		</>
	);
}
