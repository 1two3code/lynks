import meow from "meow";

export const args = meow(
	`
	Usage
	  $ cli

	Options
		--name  Your name
		--demo

	Examples
	  $ cli --name=Jane
	  Hello, Jane
`,
	{	
		flags: {
			name: {
				alias: "n",
				type: "string",
			},
			demo: {
				type: "boolean"
			}
		},
	},
);
export type ArgsType = typeof args;
export type FlagsType = typeof args.flags;