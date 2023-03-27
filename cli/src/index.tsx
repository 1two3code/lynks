#!/usr/bin/env node
import React from "react";
import { render } from "ink";
import { args } from "./cli";
import App from "./ui";

render(<App flags={args.flags} />);
