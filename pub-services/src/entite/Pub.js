export class Pub{
    constructor(name, firstName, lastName, mail, openDays, start, end, beers){
        this.name = name;
        this.owner(firstName, lastName, mail);
        this.openDays = openDays;
        this.openHours(start, end);
        this.beers = beers;
    }

    owner(firstName, lastName, mail)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.mail = mail;
    }

    openHours(start, end)
    {
        this.start = start;
        this.end = end;
    }
}
