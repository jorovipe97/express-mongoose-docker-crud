function verifyIdToken(authToken)
{
    const userTokenId = 'randomtokenid';
    if (authToken === userTokenId) {
        return {
            userId: 291997
        };
    } else {
        throw new Error('User is not on user pool.');
    }
}

module.exports = function checkIfAuthenticated(req, res, next) {
    try
    {
        // to support firebase auth just add:
        // See docs: https://firebase.google.com/docs/auth/admin/verify-id-tokens?hl=es
        // const { authToken } = req;
        //   const userInfo = await admin
        //     .auth()
        //     .verifyIdToken(authToken);
        console.log(req.token);
        const userInfo = verifyIdToken(req.token);
        req.userInfo = userInfo;
        return next();
    } catch {
        res.status(401).json({info: 'Given user is not auth.'}, );
    }
}