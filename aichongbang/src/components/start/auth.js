const token_name = "_token";
export default {
    setToken: (token) => { window.localStorage[token_name] = token },
    getToken: () => window.localStorage[token_name]
}