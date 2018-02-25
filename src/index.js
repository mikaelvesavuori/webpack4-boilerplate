import { something } from "./something.mjs";
import "./styles.scss";

if (process.env.NODE_ENV === "development") {
	require("file-loader!index.html");
}
