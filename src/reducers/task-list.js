const taskList = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            //Add task
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case '':
            break;
        default:
            return state;
    }
};

export default taskList
