export interface IUserLogon {
    username: string;
    password: string;
    name: string;
}

export interface INavItem{
    name: string;
    link: string;
    identifier: string;
}

export interface IOnboardDocuments {
    domicile: boolean;
    birth_certificate: boolean;
    marksheets: boolean;
    police_clearance: boolean;
    passport: boolean;
    declaration: boolean;
}

export interface IStudent {
    name: string;
    category: string;
    documents: IOnboardDocuments;
    dob: Date;
    father_name: string;
    mother_name: string;
    last_score: number;
    id?: number;
}

export interface IDocument {
    id: number;
    name: string;
    category: string;
}

export class UserLogOn implements IUserLogon {
    name: string;
    constructor(uname?: string, pwd?: string) {
        this.username = uname || '';
        this.password = pwd || '';
    }
    username: string;
    password: string;
}