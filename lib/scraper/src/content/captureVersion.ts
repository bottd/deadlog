export interface VersionCapture {
	clientVersion: number;
	capturedAt: string;
}

const CAPTURE_LINES = /^client_version_captured(?:_at)? .+$/gm;

function insertIntoRootAttr(content: string, lines: string[]): string {
	const all = content.split('\n');
	if (all[0] !== '``attr:') return content;
	const close = all.indexOf('``', 1);
	if (close === -1) return content;
	all.splice(close, 0, ...lines);
	return all.join('\n');
}

export function withCapturedVersion(
	content: string,
	previous: string | null,
	capture: VersionCapture | undefined
): string {
	if (CAPTURE_LINES.test(content)) {
		CAPTURE_LINES.lastIndex = 0;
		return content;
	}
	if (previous !== null) {
		const carried = previous.match(CAPTURE_LINES);
		return carried ? insertIntoRootAttr(content, carried) : content;
	}
	if (!capture) return content;
	return insertIntoRootAttr(content, [
		`client_version_captured ${capture.clientVersion}`,
		`client_version_captured_at ${JSON.stringify(capture.capturedAt)}`
	]);
}
