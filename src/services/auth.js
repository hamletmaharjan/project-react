export const getAccessToken = () => {
    const token = localStorage.getItem("token");
    return token;
};

export const getUserInfo = () => {
    const user = localStorage.getItem("user");
    return user;
}

export const clearLocalAuth = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
}