"use client";
import { Header } from "./header";
import { Footer } from "./footer";
import { FC, ReactNode } from "react";

interface ILayoutSite {
	children: ReactNode;
}

export const LayoutSite: FC<ILayoutSite> = ({ children }) => {
	return (
		<div className="flex flex-col justify-between min-h-[100dvh]">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};
