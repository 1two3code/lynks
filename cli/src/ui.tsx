import React from "react";
import { FlagsType } from "./cli";
import Demo from "./demo";
import BigGradient from "./demos/gradient";

type AppProps = {
	flags?: Partial<FlagsType>;
};
export default ({ flags }: AppProps) => (
	<>
		{flags?.demo ? (
			<Demo />
		) : (
			<BigGradient name={flags?.name}/>
		)}
	</>
);
