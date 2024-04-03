export function isAuth(to, from, next) {
    const token = localStorage.getItem('x_xsrf_token');

    if (!token) {
        if (to.name === 'login' || to.name === 'register') {
            return next;
        } else {
            return next({ name: 'login' });
        }
    }

    if (to.name === 'login' || to.name === 'register' && token) {
        return next({ name: 'main' });
    }

    return next;
}
