import { useMediaQuery } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PropTypes from "prop-types";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";

const TContext = createContext({});

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const [preferredFont, setPreferredFont] = useState("Arial");
	const [fontSize, setFontSize] = useState(16);

	const SetFont = (_event: MouseEvent, font: string | null) => {
		if (font == null) {
			setPreferredFont("Arial");
		} else {
			setPreferredFont(font);
		}
	};

	const IncreaseSize = () => {
		setFontSize((prev) => {
			return prev + 2 > 40 ? prev : prev + 2;
		});
	};

	const DecreaseSize = () => {
		setFontSize((prev) => {
			return prev - 2 < 10 ? prev : prev - 2;
		});
	};

	const theme = useMemo(
		() =>
			createTheme({
				typography: {
					fontFamily: preferredFont,
					fontSize: fontSize,
				},
				palette: {
					mode: prefersDarkMode ? "dark" : "light",
				},
			}),
		[prefersDarkMode, preferredFont, fontSize],
	);

	return (
		<TContext.Provider
			value={{
				font: preferredFont,
				SetFont,
				IncreaseSize,
				DecreaseSize,
			}}
		>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</TContext.Provider>
	);
};

ThemeContextProvider.propTypes = {
	children: PropTypes.node,
};

const ThemeContext = () => {
	return useContext(TContext);
};

export interface ThemeContextTypes {
	font: string;
	SetFont: (e: React.MouseEvent, f: string | null) => void;
	IncreaseSize: () => void;
	DecreaseSize: () => void;
}

export { ThemeContext, ThemeContextProvider };
