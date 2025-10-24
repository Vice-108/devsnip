import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export type ObjectValues<T> = T[keyof T];

export function getInitials(name: string | undefined): string {
	if (!name) return "G";
	const namesArray = name.trim().split(" ");
	const initials = namesArray.map((n) => n.charAt(0).toUpperCase()).join("");
	return initials || "G";
}
