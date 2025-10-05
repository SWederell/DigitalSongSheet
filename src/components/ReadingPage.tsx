import { Box, Container, Typography } from "@mui/material";

const ReadingPage = ({
	reading,
}: {
	reading: {
		title: string;
		subtitle: string;
		reading: string[];
		copyright: string;
	};
}) => {
	return (
		<Container>
			<Typography variant="h4">{reading.title}</Typography>

			<Typography variant="h5">{reading.subtitle}</Typography>
			{reading.reading.map((item) => {
				return (
					<Typography key={item} sx={{ marginTop: "10px" }} textAlign={"start"}>
						{item}
					</Typography>
				);
			})}
			<Box sx={{ marginTop: "20px" }}>
				<Typography sx={{ fontSize: "0.8rem" }}>
					&copy; {reading.copyright}
				</Typography>
			</Box>
		</Container>
	);
};

export default ReadingPage;
