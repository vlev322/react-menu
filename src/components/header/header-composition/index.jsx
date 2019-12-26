import React from "react";
import { Menu } from "../../menu";

export function Header({ context }) {
	return (
		<header>
			<Menu context={context} />
		</header>
	);
}
