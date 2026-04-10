import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { blackCircle } from "@/public";
import { useTranslations } from "next-intl";
import { TextHover, Marquee } from "@/components";

export default function Footer() {
	const t = useTranslations("footerContent");
	return (
		<>
			<div
				id="get-in-touch"
				className="w-full h-screen flex flex-col items-center padding-x justify-between pt-5">
				<Marquee
					titile1="Let's build something"
					titile2="Let's build something"
					className="text-[#ffeb69]"
				/>
				<div className="w-[80%] flex flex-col gap-10 xm:w-full sm:w-full">
					<div>
						<h1 className="text-[60px] xm:text-[40px] sm:text-[40px] xm:leading-[40px] sm:leading-[40px] text-[#ffeb69] font-bold leading-[62px] tracking-tight text-center xm:text-left sm:text-left">
							{t("footerHeading1")}
						</h1>
					</div>
					<div>
						<p className="text-[25px] text-[#ffeb69] leading-normal tracking-tight text-center xm:text-left sm:text-left">
							{t("footerHeading2")}
						</p>
					</div>
					<div className="flex items-center justify-center">
						<button className="group flex gap-2 items-center text-[17px] font-semibold capitalize text-[#260A2F] bg-secondary rounded-full leading-tight tracking-tight px-4 py-3">
							<Image
								src={blackCircle}
								alt="blackCircle"
								width={30}
								height={30}
								className="group-hover:rotate-[60deg] transition-all duration-300 ease-linear"
							/>
							<TextHover
								titile1={t("footerBtn")}
								titile2={t("footerBtn")}
							/>
						</button>
					</div>
				</div>
				<div className="w-full flex justify-between gap-5 py-10 xm:flex-col sm:flex-col">
					<div className="w-1/2 xm:w-full sm:w-full flex gap-5 justify-between xm:flex-col sm:flex-col">
						<div className="flex flex-col gap-5">
							<div className="flex flex-col">
								<p className="text-[16px] text-[#9FE870] leading-tight tracking-tight">
									Phone
								</p>
								<Link
									className="text-[30px] font-semibold text-[#9FE870] leading-tight tracking-tight"
									href="tell:+31 53 234 0188">
									+91 97701 84915
								</Link>
							</div>
							<div className="flex flex-col">
								<p className="text-[16px] text-[#9FE870] leading-tight tracking-tight">
									linkedin
								</p>
								<Link
									className="text-[30px] font-semibold text-[#9FE870] leading-tight tracking-tight"
									href="https://www.linkedin.com/in/yashrajrai/">
									@YashRaj
								</Link>
							</div>
						</div>
						<div className="flex flex-col gap-5">
							<div className="flex flex-col">
								<p className="text-[16px] text-[#9FE870] leading-tight tracking-tight">
									E-mail
								</p>
								<Link
									className="text-[30px] font-semibold text-[#9FE870] leading-tight tracking-tight"
									href="mailTo:yashrajrai1234@gmail.com">
									yashrajrai1234@gmail.com
								</Link>
							</div>
							<div className="flex flex-col">
								<p className="text-[16px] text-[#9FE870] leading-tight tracking-tight">
									Instagram
								</p>
								<Link
									className="text-[30px] font-semibold text-[#9FE870] leading-tight tracking-tight"
									href="/">
									@yashraajjj
								</Link>
							</div>
						</div>
					</div>
					<div className="w-[30%] xm:w-full sm:w-full">
						<div className="flex flex-col gap-10">
							<div className="flex flex-col">
								<p className="text-[16px] text-[#9FE870] leading-tight tracking-tight">
									Location
								</p>
								<Link
									className="text-[30px] font-semibold text-[#9FE870] leading-tight tracking-tight"
									href="/">
									Bangaluru, <br /> Karnataka
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="w-full flex flex-col">
					<motion.div
						initial={{ borderTopWidth: 0, width: "0%" }}
						viewport={{ once: true }}
						whileInView={{
							borderTopWidth: 1,
							width: "100%",
							borderColor: "#9FE870",
							origin: "left",
						}}
						transition={{
							duration: 1,
							ease: "easeInOut",
						}}
					/>
					<div className="w-full flex items-center justify-between py-4">
						<motion.h2
							initial={{ y: "100%" }}
							viewport={{ once: true }}
							whileInView={{
								y: 0,
							}}
							transition={{
								duration: 1,
								ease: "easeInOut",
							}}
							className="text-[#9FE870] text-sm overflow-hidden">
							Yashraj rai 2026
						</motion.h2>
						<motion.h2
							initial={{ y: "100%" }}
							viewport={{ once: true }}
							whileInView={{
								y: 0,
							}}
							transition={{
								duration: 1,
								ease: "easeInOut",
							}}
							className="text-[#9FE870] text-sm overflow-hidden">
							Peace Out
						</motion.h2>
					</div>
				</div>
			</div>
		</>
	);
}
