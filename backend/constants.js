const CookieConfig = {
    httpOnly: true,
    maxAge: 1000000,
    secure: true,
    signed: true,
    sameSite: 'none'
}

module.exports = {
    CookieConfig
}