//----wrong code-----

class wrongPasta{
    
    constructor(name, lot){
        this.name = name;
        this.lot = lot;
    }

    getLength(){
        return 'The length of pasta is between 25 and 30 cm.'
    }

    getDateLot(){
        //extract the date from lot
        return '2023-05-15';
    }
}

class wLongPasta extends wrongPasta{

    constructor(name, lot){
        super(name, lot);
    }

    getPacking(){
        return 'Polypropylene';
    }
}

class wShortPasta extends wrongPasta{

    constructor(name, lot){
        super(name, lot);
    }

    getLength(){
        throw new Error('Short pasta does not have length.');
    }

}

let pasta = new wLongPasta('spaguetti', '2023-05-150025');
console.log(pasta.getLength());
console.log(pasta.getDateLot());

//pasta = new ShortPasta('farfalle', '2023-05-150025');
//console.log(pasta.getDateLot());
//console.log(pasta.getLength());

//----------------------right code-------------------------------

class Pasta{
    
    constructor(name, lot){
        this.name = name;
        this.lot = lot;
    }

    getDateLot(){
        //extract the date from lot
        return '2023-05-15';
    }
}

class LongPasta extends Pasta{

    constructor(name, lot){
        super(name, lot);
    }

    getLength(){
        return 'The length of pasta is between 25 and 30 cm.'
    }

    getPacking(){
        return 'Polypropylene';
    }
}

class ShortPasta extends Pasta{

    constructor(name, lot){
        super(name, lot);
    }

    getPacking(){
        return 'Carton';
    }

}

console.log('----------------');

let pasta2 = new LongPasta('spaguetti', '2023-05-150025');
console.log(pasta2.getDateLot());

pasta2 = new Pasta('farfalle', '2023-05-150025');
console.log(pasta2.getDateLot());

