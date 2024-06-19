export class HttpError extends Error {
	public status: number;
	public options: any;
	constructor({
		status,
		message,
		options,
	}: {
		status?: number;
		message: string;
		options?: any;
	}) {
		super(message);
		this.status = status ?? 500;
		this.options = options;
	}
}
