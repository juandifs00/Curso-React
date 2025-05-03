export const initialState = {
    status: "Checking",
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
};

export const authenticatedState = {
    status: "Authenticated",
    uid: '123ABC',
    email: 'test@test.com',
    displayName: 'Demo User',
    photoURL: 'https://demo.com/photo.jpg',
    errorMessage: null,
};

export const notAuthenticatedState = {
    status: "Not-authenticated",
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
};

export const demoUser = {
    uid: '123ABC',
    email: 'demo@test.com',
    displayName: 'Demo User',
    photoURL: 'https://demo.com/photo.jpg',
};