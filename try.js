let ob = {
    man: {
        age: 33,
        name: 'pete',
        fname: 'ivanos'
    },
    fruit: {
        weigth: 500,
        color: {
            start: 'GREEN',
            finish: 'RED'
        },
        price: [2, 5, 114, 4, 567]
    },
    mouse: 'Micky'
}

let res = [];

function boor(dir, ob) {
    Object.keys(ob).forEach(el => {
        let way = `${dir} - ${el}`;
        switch (typeof ob[el]) {
            case 'object':
                boor(way, ob[el]);
                break;
            case 'number':
            case 'boolean':
            case 'string':
                res.push(`${way} > ${ob[el]}`);
                break;
        }
    });
}
boor('ob:', ob);
console.log(res);


