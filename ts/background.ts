import { helloWorld } from './hello-world.js';

chrome.runtime.onInstalled.addListener(() => {
    helloWorld();
});
