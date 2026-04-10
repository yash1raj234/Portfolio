"use client";
import { useState } from "react";

export default function MusicPlayer() {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div
			style={{
				position: "fixed",
				bottom: "24px",
				right: "24px",
				zIndex: 9999,
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-end",
				gap: "10px",
			}}>
			{/* Expandable player panel */}
			<div
				style={{
					overflow: "hidden",
					maxHeight: isOpen ? "180px" : "0px",
					opacity: isOpen ? 1 : 0,
					transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",
					borderRadius: "16px",
					boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
				}}>
				<iframe
					allow="autoplay *; encrypted-media *;"
					frameBorder="0"
					height="150"
					style={{
						width: "300px",
						overflow: "hidden",
						background: "transparent",
						display: "block",
						borderRadius: "16px",
					}}
					sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
					src="https://embed.music.apple.com/in/album/need-you-feat-thomas-oliver/1477169157?i=1477169164"
				/>
			</div>

			{/* Floating toggle button */}
			<button
				onClick={handleToggle}
				title={isOpen ? "Hide player" : "Play music"}
				style={{
					width: "52px",
					height: "52px",
					borderRadius: "50%",
					border: "2px solid #9FE870",
					background: "#163300",
					cursor: "pointer",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					boxShadow: "0 4px 20px rgba(159,232,112,0.3)",
					transition: "transform 0.2s ease, box-shadow 0.2s ease",
					padding: 0,
				}}
				onMouseEnter={(e) => {
					(e.currentTarget as HTMLButtonElement).style.transform = "scale(1.1)";
					(e.currentTarget as HTMLButtonElement).style.boxShadow =
						"0 6px 28px rgba(159,232,112,0.5)";
				}}
				onMouseLeave={(e) => {
					(e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
					(e.currentTarget as HTMLButtonElement).style.boxShadow =
						"0 4px 20px rgba(159,232,112,0.3)";
				}}>
				{isOpen ? (
					/* Pause / X icon */
					<svg
						width="22"
						height="22"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#9FE870"
						strokeWidth="2.5"
						strokeLinecap="round">
						<line x1="18" y1="6" x2="6" y2="18" />
						<line x1="6" y1="6" x2="18" y2="18" />
					</svg>
				) : (
					/* Music note icon */
					<svg
						width="22"
						height="22"
						viewBox="0 0 24 24"
						fill="#9FE870">
						<path d="M9 18V5l12-2v13" />
						<circle cx="6" cy="18" r="3" />
						<circle cx="18" cy="16" r="3" />
					</svg>
				)}
			</button>

			{/* Animated pulse ring when closed (attention hint) */}
			{!isOpen && (
				<span
					style={{
						position: "absolute",
						bottom: 0,
						right: 0,
						width: "52px",
						height: "52px",
						borderRadius: "50%",
						border: "2px solid #9FE870",
						animation: "musicPulse 2s ease-out infinite",
						pointerEvents: "none",
					}}
				/>
			)}

			<style>{`
				@keyframes musicPulse {
					0%   { transform: scale(1);   opacity: 0.7; }
					100% { transform: scale(1.7); opacity: 0; }
				}
			`}</style>
		</div>
	);
}
