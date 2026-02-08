import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

// Extend the Request interface to include userId
interface AuthRequest extends Request {
    userId?: string;
}

export const authenticate = (req: AuthRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    const JWT_SECRET = process.env.JWT_SECRET || 'Fallback_Secret';

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: "No token, authorization denied" });
    }

    const token = authHeader.split(' ')[1];

    try {
        // 1. Verify the token
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };

        // 2. Attach the user ID to the request object
        req.userId = decoded.userId;

        // 3. Move to the next function (the Controller)
        next();
    } catch (error) {
        res.status(401).json({ error: "Token is not valid" });
    }
};