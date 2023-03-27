import meow from "meow";

export const args = meow(
	`
	Usage
	  $ cli

	Options
		--name  Your name

	Examples
	  $ cli --name=Jane
	  Hello, Jane
`,
	{
		flags: {
			name: {
				type: "string",
			},
		},
	}
);
export type ArgsType = typeof args;
export type FlagsType = typeof args.flags;