import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

// Define a custom interface for the Request object
interface AuthenticatedRequest extends Request {
    user?: any; // change type later
    exp?: Date; // change type later
}

const authenticateUser = (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
) => {
    // Check for the token being sent in a header or as a query param
    let token: string | undefined =
        req.get('Authorization') || req.query.token?.toString();
    // Default to null
    req.user = null;
    if (!token) return next();
    // Remove the 'Bearer ' that was included in the token header
    token = token.replace('Bearer ', '') as string;
    // Check if token is valid and not expired
    jwt.verify(token, process.env.SECRET as string, function (err, decoded) {
        // Invalid token if err or decoded is undefined
        if (err || !decoded) return next();
        // decoded is the entire token payload
        const payload = decoded as JwtPayload; // Type assertion
        req.user = payload.user;
        // Set the expiration time on the request object
        if (payload.exp) {
            req.exp = new Date(payload.exp * 1000);
        }
        return next();
    });
};

export default authenticateUser;
