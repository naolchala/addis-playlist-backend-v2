class HttpError extends Error {
	public status: number;

	public options?: { [key: string]: unknown };

	constructor({
		status,
		message,
		options,
	}: {
		status?: number;
		message: string;
		options?: { [key: string]: unknown };
	}) {
		super(message);
		this.status = status ?? 500;
		this.options = options;
	}
}

export default HttpError;
