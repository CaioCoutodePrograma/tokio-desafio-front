export class DateFormat{

    public formatarData(date : Date): string{
       
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    }

    public formatarDataString(date : string): string{
       
        const day = date.split('-')[2];
        const month = date.split('-')[1];
        const year = date.split('-')[0];

        return `${day}/${month}/${year}`;
    }




}