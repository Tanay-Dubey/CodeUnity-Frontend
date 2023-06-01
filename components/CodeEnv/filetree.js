const filetree =  [{
        id: 1,
        name: "Folder 1",
        type: "folder",
        children: [
            {
                id: 1,
                name: "Folder 2",
                type: "folder",
                children: [
                    { id: 1, name: "File 1", type: "file" },
                    { id: 2, name: "File 2", type: "file" }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Folder 3",
        type: "folder",
        children: [
            { id: 1, name: "File 3", type: "file" },
            { id: 2, name: "File 4", type: "file" }
        ]
    }]


export default filetree;
