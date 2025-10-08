import { FlexBox } from "./flexbox.js";
import { createTitle, createButton, createInput} from "./components.js";

const layout = new FlexBox('column')
    .alignItems("center")
    .justifyContent("center");

const button = createButton('Add task');
const input = createInput('Insert your task here')

// layout append

layout.append(createTitle("Mini ToDo List (JS Only)"));
layout.append(button);
layout.append(input);
//render

layout.render()