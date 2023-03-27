import React from "react";
import { Text } from "ink";
import { FlagsType } from "./cli";

type AppProps = {
	flags?: FlagsType
};
export default ({ flags }: AppProps) => (
	<Text>
		Hello, <Text color="green">{flags?.name}</Text>
	</Text>
);
