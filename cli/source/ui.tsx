import React from "react";
import { Text } from "ink";

type AppProps = { name?: string }
const App = ({ name = "Stranger" }: AppProps) => (
	<Text>
		Hello, <Text color="green">{name}</Text>
	</Text>
);

module.exports = App;
export default App;
