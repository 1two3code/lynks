import React from "react";
import Gradient from "ink-gradient";
import BigText from "ink-big-text";

export default ({ name }: { name?: string }) => {
	return (
		<Gradient name="rainbow">
			<BigText text={`Hello ${name}`} />
		</Gradient>
	);
};
