import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
	status: string
	message: string
	timestamp: string
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	res.status(200).json({
		status: 'healthy',
		message: 'Portfolio by @juliogarciape is healthy',
		timestamp: new Date().toString(),
	})
}
