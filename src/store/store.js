import { writable } from "svelte/store";

const INITIAL_VALUE = [
    {
        id: 1,
        title: 'Title 1',
        description: 'Example 1'
    },
    {
        id: 2,
        title: 'Title 2',
        description: 'Example 2'
    },
    {
        id: 3,
        title: 'Title 3',
        description: 'Example 3'
    },
    {
        id: 4,
        title: 'Title 4',
        description: 'Example 4'
    },
]

export const tasks = writable(INITIAL_VALUE);