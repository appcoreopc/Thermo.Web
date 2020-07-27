
export let fakeData = [
    {
        id: 1,
        firstname: 'jeremy',
        lastname: 'woo'
    },
    {
        id: 2,
        firstname: 'jeremy2',
        lastname: 'woo2'
    },
    {
        id: 3,
        firstname: 'jeremy2',
        lastname: 'woo2'
    },
];

export function logstate(state: any) {

    if (state.userSetup.payload == undefined)
        return 0;
    else
        return state.userSetup.payload.count;
}

export function handleUsersRecord(state: any) {
    if (state != undefined && state.userSetup != undefined && state.userSetup.users != null) {
        return state.userSetup.users;
    }
    else
        return fakeData;
}

export function handleExecutionResult(state: any) {
    debugger;
    if (state != undefined && state.userSetup != undefined && state.userSetup.result != undefined) {
        console.log(state.userSetup.result);
        return state.userSetup.result;
    }
    else
        return false;
}

export function createExectionStatusResponse(status: number, message: string, data: any): {} {
    return {
        status,
        message,
        data
    };
}
