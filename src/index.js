import state from "./redux/state";
import { rerenderEntireTree } from "./render";

// відмалювати все дерево
rerenderEntireTree(state);