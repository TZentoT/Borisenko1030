export interface Student {
    id: number;
    surname: string;
    name: string;
    patronymic: string;
    phone: string;
    email: string;
    dob: string; // date of birth
    groupNum: number;
    major: number;
}

export enum StudentsGroup{
    SAPR,
    Web,
    IKT,
    Design,
    Journalism
}

export enum StudentMajor{
    IT = 10,
    design = 11,
    typography = 12
}