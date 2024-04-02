export function isAuth(to, from, next) {
    const token = localStorage.getItem('x_xsrf_token');

    console.log(token);
    if (!token) {
        if (to.name === 'login' || to.name === 'register') {
            return {};
        } else {
            return { name: 'login' };
        }
    }

    if (to.name === 'login' || to.name === 'registration' && token) {
        return { name: 'main' };
    }

    return next;
}
