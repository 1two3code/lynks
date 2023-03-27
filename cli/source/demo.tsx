import React from "react";
import { Box, Newline, Text } from "ink";

export default () => (
	<>
		<Text color="green">I am green</Text>
		<Text color="black" backgroundColor="white">
			I am black on white
		</Text>
		<Text color="#ffffff">I am white</Text>
		<Text bold>I am bold</Text>
		<Text italic>I am italic</Text>
		<Text underline>I am underline</Text>
		<Text strikethrough>I am strikethrough</Text>
		<Text inverse>I am inversed</Text>

		<Box borderStyle="single" paddingTop={2}>
			<Text>Top</Text>
		</Box>
		<Box borderStyle="double" paddingBottom={2}>
			<Text>Bottom</Text>
		</Box>
		<Box borderStyle="round" paddingLeft={2}>
			<Text>Left</Text>
		</Box>
		<Box borderStyle="bold" paddingRight={2}>
			<Text>Right</Text>
		</Box>
		<Box paddingX={2}>
			<Text>Left and right</Text>
		</Box>
		<Box paddingY={2}>
			<Text>Top and bottom</Text>
		</Box>
		<Box padding={2}>
			<Text>Top, bottom, left and right</Text>
		</Box>

		<Box flexDirection="column">
			<Box>
				<Box borderStyle="single" marginRight={2}>
					<Text>single</Text>
				</Box>

				<Box borderStyle="double" marginRight={2}>
					<Text>double</Text>
				</Box>

				<Box borderStyle="round" marginRight={2}>
					<Text>round</Text>
				</Box>

				<Box borderStyle="bold">
					<Text>bold</Text>
				</Box>
			</Box>

			<Box marginTop={1}>
				<Box borderStyle="singleDouble" marginRight={2}>
					<Text>singleDouble</Text>
				</Box>

				<Box borderStyle="doubleSingle" marginRight={2}>
					<Text>doubleSingle</Text>
				</Box>

				<Box borderStyle="classic">
					<Text>classic
          <Newline />
          </Text>
				</Box>
			</Box>
		</Box>
	</>
);
