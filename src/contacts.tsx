import { v4 as uuidv4 } from 'uuid';


export async function getContacts(params) {
    console.log("params: ", params);
    if (params == "12") {

        return [
            { "id": "12", "first": "a", "avatar": "/vite.svg" }
        ];
    } else {
        return [
            { "id": "a", "first": "a", "avatar": "/vite.svg" }, 
            { "id": "b", "first": "b", "avatar": "vite.svg" }
        ];

    }
}

export async function getContact() {
    return [
        { "id": "a", "first": "a", "avatar": "/vite.svg" }, 
    ];
}

export async function updateContact(id, updates) {
    console.log("updateContact: ", updates);
    const uuid: string = uuidv4();
    console.log("uuid: ", uuid);
    return [
        { "id": uuid, "first": updates.first, "last": updates.last, "avatar": "/vite.svg" }, 
    ];
}

export async function createContact() {
    return [
        { "id": "a", "first": "a", "avatar": "/vite.svg" }, 
        { "id": "b", "first": "b", "avatar": "vite.svg" }
    ];
}
