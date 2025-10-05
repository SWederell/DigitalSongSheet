import { Box, Typography } from "@mui/material";

const SongPage = ({
	ccli: ccliNo,
	song,
}: {
	ccli: string;
	song: {
		title: string;
		B: string[][];
		C: string[][];
		E: string[][];
		V: string[][];
		order: string;
		copyright: string;
		ccli: boolean;
	};
}) => {
	const orderArr = song.order.split(" ");
	const genItem = (orderItem: string) => {
		const type: string = orderItem[0].toUpperCase();
		const idx = parseInt(orderItem[1]) - 1;
		let textArr: string[] = [];

		switch (type) {
			case "C":
			case "V":
			case "B":
			case "E":
				textArr = song[type][idx];
				break;
			default:
				break;
		}

		return (
			<Box key={Math.random()} sx={{ marginTop: "2rem" }}>
				{textArr.map((text) => {
					return (
						<Typography
							key={text}
							sx={{ fontStyle: type == "C" ? "italic" : "normal" }}
						>
							{text}
						</Typography>
					);
				})}
			</Box>
		);
	};

	return (
		<Box>
			<Typography variant="h4" sx={{ marginTop: "10px" }}>
				{song.title}
			</Typography>

			{orderArr.map((item) => {
				return genItem(item);
			})}
			<Box sx={{ marginTop: "20px" }}>
				<Typography sx={{ fontSize: "0.8rem" }}>
					&copy; {song.copyright}
				</Typography>
				{song.ccli && (
					<Typography sx={{ fontSize: "0.8rem" }}>
						Reproduced under CCLI: #{ccliNo}
					</Typography>
				)}
			</Box>
		</Box>
	);
};

export default SongPage;
