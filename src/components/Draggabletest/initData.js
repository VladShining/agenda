const initialData= {
    tasks : {
        'task-1':{id:'_1',content:'NOthing to begin'},
        'task-2':{id:'_2',content:'next action'},
        'task-3':{id:'_3',content:'stack'},
        'task-4':{id:'_4',content:'loremipsumm'},
    },
    columns:{
        'column-1':{
            id:'column-1',
            title:'TOdo',
            taskIds:['task-1','task-2','task-3','task-4']
        },
    },
    columnOrder:['column-1'],

};
export default initialData;