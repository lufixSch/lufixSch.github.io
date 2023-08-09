export interface mdMetaData {
	title: string;
	layout: 'article' | 'error';
	image: string;
	repository: string;
	repository_icon: 'github' | 'gitlab' | 'bitbucket';
	status: 'finished' | 'wip' | 'stalled' | 'abandoned';
	update?: string;
	header?: boolean;
}
