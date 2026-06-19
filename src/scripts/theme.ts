export const THEME_STORAGE_KEY = "theme";
export const THEME_TRANSITION_MS = 350;

export type Theme = "light" | "dark";

export function getPreferredTheme(): Theme {
	const stored = localStorage.getItem(THEME_STORAGE_KEY);
	if (stored === "light" || stored === "dark") return stored;
	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function getCurrentTheme(): Theme {
	return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

export function applyTheme(theme: Theme): void {
	document.documentElement.setAttribute("data-theme", theme);
}

function runThemeTransition(update: () => void): void {
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		update();
		return;
	}

	if (document.startViewTransition) {
		document.startViewTransition(update);
		return;
	}

	document.documentElement.classList.add("theme-transition");
	update();
	window.setTimeout(() => {
		document.documentElement.classList.remove("theme-transition");
	}, THEME_TRANSITION_MS);
}

export function setTheme(theme: Theme, persist = true): void {
	runThemeTransition(() => {
		applyTheme(theme);
		if (persist) localStorage.setItem(THEME_STORAGE_KEY, theme);
	});
}

export function initTheme(): void {
	applyTheme(getPreferredTheme());
}
