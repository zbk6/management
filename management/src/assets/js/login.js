import Http from './axios'

// export async function position(ip) {
//     const position = await Http({
//         // url:'/position/40.10038,116.36867'
//         url: `/position/${ip}`
//     })
//     return position.data;
// }
// export async function icon() {
//     const icon = await Http({
//         url: '/index_category'
//     })
//     return icon.data;
// }

export async function loginson(name, pass) {
    const login = await Http({
        url: "/login",
        method: 'POST',
        params: {
            username: name,
            password: pass
        }
    })
    return login
}