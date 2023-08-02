export interface mdMetaData {
	title: string;
	layout: 'article';
	image: string;
	repository: string;
	repository_name: string;
	repository_icon: 'github' | 'gitlab' | 'bitbucket';
	status: 'finished' | 'wip' | 'stalled' | 'abandoned';
	update?: string;
}
