import "@/styles/globals.css";
import type { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import MusicPlayer from "@/components/music-player";

export const metadata: Metadata = {
	title: "Yashraj",
	description: "Portfolio of Yashraj Rai",
};

export default async function RootLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	const messages = await getMessages();
	return (
		<html lang={locale}>
			<body>
				<NextIntlClientProvider messages={messages}>
					{children}
					<MusicPlayer />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
