export type Song = {
	title: string;
	B: string[][];
	C: string[][];
	E: string[][];
	V: string[][];
	order: string;
	copyright: string;
	ccli: boolean;
};

export type Reading = {
	title: string;
	subtitle: string;
	reading: string[];
	copyright: string;
};

export type OrderObj = {
	type: string;
	title: string;
	subtitle: string;
	showOrder: string;
	id: string;
};

export type ServiceData = {
	songs: Record<string, Song>;
	readings: Reading[];
	order: OrderObj[];
};
