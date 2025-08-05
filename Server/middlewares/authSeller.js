import jwt from 'jsonwebtoken'

const authSeller = async (req, res, next) => {
    console.log(req.cookies);
    
    const { token } = req.cookies;
    console.log(token);
    const sellerToken=token
    

    if (!sellerToken) {
        return res.json({ success: false, message: 'Not Authorized' })
    }
    try {
        const tokenDecode = jwt.verify(sellerToken, process.env.JWT_SECRET)
        if (tokenDecode.email === process.env.SELLER_EMAIL) {
            next();
        }
        else {
            return res.json({ success: false, message: 'Not Authorized' });
        }

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export default authSeller;