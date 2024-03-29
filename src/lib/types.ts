export interface mdMetaData {
	title: string;
	layout: LayoutType;
	image: string;
	description: string;
	repository: string;
	repository_icon: RepoType;
	status: ProjectStatus;
	update?: string;
	header?: boolean;
	last_update?: string;
}

export type LayoutType = 'article' | 'error' | 'project';
export type RepoType = 'github' | 'gitlab' | 'bitbucket';
export type ProjectStatus = 'finished' | 'wip' | 'stalled' | 'abandoned';
