import type { NextApiRequest, NextApiResponse } from 'next'
import QRCode from 'qrcode'
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const uid = Array.isArray(req.query.uid) ? req.query.uid[0] : req.query.uid;

    QRCode.toFileStream(res, uid.substring(0, 30), (error) => {
        console.error(error)
        res.status(500).send("oop");
    });
}
