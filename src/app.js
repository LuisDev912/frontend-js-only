import { FlexBox } from "./flexbox.js";
import { createTitle, createButton, createInput } from "./components.js";

const layout = new FlexBox('column')
    .alignItems("center")
    .justifyContent("center");

layout.append(createTitle("Mini ToDo List (JS Only)"));


//render

layout.render()