import { IPagination } from './IPagination';

export interface ISearch {
	pagination: IPagination;
	title: string;
	categories: string;
	status: string;
	ageRating: string;
	sort: string;
}
