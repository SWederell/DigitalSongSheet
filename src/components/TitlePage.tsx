import { Container, Typography } from "@mui/material";
import PropTypes from "prop-types";

const TitlePage = ({
	tpTitle,
	tpSubtitle,
}: {
	tpTitle: string | undefined;
	tpSubtitle: string | undefined;
}) => {
	return (
		<Container
			sx={{
				height: "100%",
				display: "flex",
				flexDirection: "column",
				placeContent: "center",
			}}
		>
			<Typography variant="h4">{tpTitle}</Typography>
			<Typography variant="h5" style={{ whiteSpace: "pre-line" }}>
				{tpSubtitle}
			</Typography>
		</Container>
	);
};

TitlePage.propTypes = {
	tpTitle: PropTypes.string,
	tpSubtitle: PropTypes.string,
};

export default TitlePage;
