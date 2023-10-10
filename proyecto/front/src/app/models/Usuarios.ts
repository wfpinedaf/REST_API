export class ClassUsers{
    _id?: string
    First_Name: string
    Last_Name: string
    Email:string
    Password:string

    constructor(First_Name: string , Last_Name: string, Email: string, Password: string) {
        this.First_Name = First_Name
        this.Last_Name = Last_Name
        this.Email = Email
        this.Password = Password
    }
}
