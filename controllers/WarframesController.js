const Warframes = require('../models').Warframes;

const getAll = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let err, warframes;
    warframes = [{ Name: 'Ash', Prime: 1, Umbra: 0 },
    { Name: 'Atlas', Prime: 0, Umbra: 0 },
    { Name: 'Banshee', Prime: 1, Umbra: 0 },
    { Name: 'Excalibur', Prime: 1, Umbra: 0 },
];
}