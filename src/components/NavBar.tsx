import EastIcon from "@mui/icons-material/East";
import ListIcon from "@mui/icons-material/List";
import SettingsIcon from "@mui/icons-material/Settings";
import ShareIcon from "@mui/icons-material/Share";
import WestIcon from "@mui/icons-material/West";
import { Box, Button } from "@mui/material";
import { ServiceData } from "../types";

const NavBar = ({
	data,
	prevItem,
	nextItem,
	currentIdx,
	toggleSkipOpen,
	toggleShareOpen,
	toggleSettingsOpen,
}: {
	data: ServiceData;
	prevItem: () => void;
	nextItem: () => void;
	currentIdx: number;
	toggleSkipOpen: () => void;
	toggleShareOpen: () => void;
	toggleSettingsOpen: () => void;
}) => {
	return (
		<Box
			sx={{
				display: "flex",
				width: "100%",
				justifyContent: "space-around",
				marginBottom: "20px",
				marginTop: "20px",
			}}
		>
			<Button onClick={prevItem} disabled={currentIdx <= 0}>
				<WestIcon />
			</Button>
			<Button
				onClick={() => {
					toggleSkipOpen();
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<ListIcon />
					Jump To
				</Box>
			</Button>
			<Button
				onClick={() => {
					toggleShareOpen();
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<ShareIcon />
					Share
				</Box>
			</Button>
			<Button
				onClick={() => {
					toggleSettingsOpen();
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<SettingsIcon />
					Font
				</Box>
			</Button>
			<Button onClick={nextItem} disabled={currentIdx >= data.order.length - 1}>
				<EastIcon />
			</Button>
		</Box>
	);
};

export { NavBar };
