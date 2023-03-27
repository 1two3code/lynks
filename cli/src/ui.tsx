import React from "react";
import { Text } from "ink";
import { FlagsType } from "./cli";
import Demo from "./demo";

type AppProps = {
	flags?: Partial<FlagsType>;
};
export default ({ flags }: AppProps) => (
	<>
		{flags?.demo ? (
			<Demo />
		) : (
			<Text>
				Hello, <Text color="green">{flags?.name}</Text>
			</Text>
		)}
	</>
);
