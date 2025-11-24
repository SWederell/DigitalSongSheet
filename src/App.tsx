import TextDecreaseIcon from "@mui/icons-material/TextDecrease";
import TextIncreaseIcon from "@mui/icons-material/TextIncrease";
import {
	Box,
	Button,
	ButtonGroup,
	Container,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	ToggleButton,
	ToggleButtonGroup,
	useMediaQuery,
} from "@mui/material";
import { useState } from "react";

import data from "./data-files/oan2025NIV";
import "./App.css";

import QR from "./assets/QR.png";
import { NavBar } from "./components/NavBar";
import ReadingPage from "./components/ReadingPage";
import SongPage from "./components/SongPage";
import TitlePage from "./components/TitlePage";
import { ThemeContext, ThemeContextTypes } from "./context/ThemeContext";
import { OrderObj, Reading, ServiceData, Song } from "./types";

function App() {
	const baseData: ServiceData = useState(data)[0];
	const [currentIdx, setCurrentIdx] = useState(0);
	const landscape = useMediaQuery("(orientation:landscape)");
	const { DecreaseSize, IncreaseSize, SetFont, font } =
		ThemeContext() as ThemeContextTypes;

	const [settingsOpen, setSettingsOpen] = useState(false);
	const toggleSettingsOpen = () => {
		setSettingsOpen((prev: boolean) => !prev);
	};
	const [skipOpen, setSkipOpen] = useState(false);
	const toggleSkipOpen = () => {
		setSkipOpen((prev: boolean) => !prev);
	};

	const [shareOpen, setShareOpen] = useState(false);
	const toggleShareOpen = () => {
		setShareOpen((prev: boolean) => !prev);
	};

	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};

	const nextItem = () => {
		setCurrentIdx((prev) => prev + 1);
		scrollToTop();
	};

	const prevItem = () => {
		setCurrentIdx((prev) => prev - 1);
		scrollToTop();
	};

	const genScreen = () => {
		const itemData = data.order[currentIdx];
		switch (itemData.type) {
			case "title":
				return (
					<TitlePage tpTitle={itemData.title} tpSubtitle={itemData.subtitle} />
				);
			case "song": {
				const showOrder = itemData.showOrder;
				const id = itemData.id;
				const song: Song = baseData.songs[id];
				if (showOrder !== "") {
					song.order = showOrder;
				}
				return (
					<SongPage
						song={song}
						ccli={song.copyright == "Public Domain" ? "" : "112244"}
					/>
				);
			}
			case "reading": {
				const id = parseInt(itemData.id) - 1;
				const readings: Reading[] = baseData.readings;
				return <ReadingPage reading={readings[id]} />;
			}
		}
	};

	const getSkipTitle = (item: OrderObj) => {
		const songs = baseData.songs;
		const readings = baseData.readings;
		switch (item.type) {
			case "song":
				return `Song: ${songs[item.id].title}`;
			case "reading":
				return `Reading: ${readings[parseInt(item.id) - 1].title}`;
			case "title":
				return `${item.title}`;
			default:
				("");
		}
	};

	const genSkipList = () => {
		return (
			<Box>
				<List>
					{baseData.order.map((item, index) => {
						return (
							<ListItem key={index}>
								<ListItemButton
									onClick={() => {
										setCurrentIdx(index);
										scrollToTop();
										toggleSkipOpen();
									}}
								>
									<ListItemText primary={getSkipTitle(item)} />
								</ListItemButton>
							</ListItem>
						);
					})}
				</List>
			</Box>
		);
	};

	const genSettingList = () => {
		const fonts = ["Arial", "Roboto", "Open-Dyslexic", "Verdana", "Comic Neue"];
		return (
			<Box>
				<List>
					<ListItem>
						<ListItemText>Text Size</ListItemText>
						<ButtonGroup>
							<Button onClick={() => DecreaseSize()}>
								<TextDecreaseIcon />
							</Button>
							<Button onClick={() => IncreaseSize()}>
								<TextIncreaseIcon />
							</Button>
						</ButtonGroup>
					</ListItem>
					<ListItem>
						<ListItemText>Font</ListItemText>
						<ToggleButtonGroup
							onChange={(e, f: string) => SetFont(e, f)}
							value={font}
							exclusive
						>
							{fonts.map((font) => (
								<ToggleButton value={font} key={font}>
									<p style={{ fontFamily: font }}>{font}</p>
								</ToggleButton>
							))}
						</ToggleButtonGroup>
					</ListItem>
				</List>
			</Box>
		);
	};

	return (
		<Box
			sx={{
				display: "flex",
				alignItems: landscape ? "start" : "center",
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					width: "90vw",
					height: "100%",
				}}
			>
				<Box sx={{ flexGrow: 1 }}>{genScreen()}</Box>
				<NavBar
					data={data}
					toggleSettingsOpen={toggleSettingsOpen}
					toggleShareOpen={toggleShareOpen}
					toggleSkipOpen={toggleSkipOpen}
					prevItem={prevItem}
					nextItem={nextItem}
					currentIdx={currentIdx}
				/>
			</Box>

			{/* <Container>
				<Typography>
					This site is designed for landscape mode, please turn your device.
				</Typography>
				<ScreenRotationIcon fontSize="large" sx={{ marginTop: "10px" }} />
			</Container> */}
			<Drawer anchor="bottom" open={skipOpen} onClose={toggleSkipOpen}>
				{genSkipList()}
			</Drawer>
			<Drawer anchor="bottom" open={settingsOpen} onClose={toggleSettingsOpen}>
				{genSettingList()}
			</Drawer>
			<Drawer anchor="bottom" open={shareOpen} onClose={toggleShareOpen}>
				<Container
					sx={{ display: "flex", justifyContent: "center" }}
					onClick={toggleShareOpen}
				>
					<img
						src={QR}
						height={"200px"}
						width={"200px"}
						style={{ marginTop: "80px", marginBottom: "80px" }}
					/>
				</Container>
			</Drawer>
		</Box>
	);
}

export default App;
