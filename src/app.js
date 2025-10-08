import { FlexBox } from "./flexbox.js";
import { createTitle, createButton, createInput, Task} from "./components.js";

const layout = new FlexBox('column')
    .alignItems("center")
    .justifyContent("center");

const input = createInput('Insert your task here')
const taskList = document.createElement('ul');
taskList.style.listStyle = 'none';
taskList.style.padding = '0';

const addBtn = createButton('Add', () => {
    if (input.value.trim()) {
        const task = new Task(input.value);
        task.render(taskList);
        
        input.value = "";
    }
});
// layout append

layout.append(createTitle("Mini ToDo List (JS Only)"));
layout.append(input);
//render

const formRow = new FlexBox('row')
    .append(input)
    .append(addBtn);

layout.append(formRow.element).append(taskList);
layout.render()