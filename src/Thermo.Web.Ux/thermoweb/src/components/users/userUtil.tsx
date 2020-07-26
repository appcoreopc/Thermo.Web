
export let fakeData = [
    {
        id: 1,
        firstname: 'jeremy',
        lastName: 'woo'
    },
    {
        id: 2,
        firstname: 'jeremy2',
        lastName: 'woo2'
    },
    {
        id: 3,
        firstname: 'jeremy2',
        lastName: 'woo2'
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

export function handleUserDeleteState(state: any) {
    debugger;
    if (state != undefined && state.userSetup != undefined && state.userSetup.userDeleteStatus != null) {
        console.log('handleUserDeleteState' + state.userSetup.userDeleteStatus);
        return state.userSetup.userDeleteStatus;
    }
    else
        return false;
}

export function handleUserAddState(state: any) {
    if (state != undefined && state.userSetup != undefined && state.userSetup.userAddStatus != undefined)
        return state.userSetup.userAddStatus;
    else
        return false;
}