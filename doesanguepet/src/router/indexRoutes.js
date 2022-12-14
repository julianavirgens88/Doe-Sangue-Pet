const router = require('express').Router()

router.get('/', (req,res)=>{
    res.status(200).send({
        'versao': '1.0',
        'titulo': 'Doe Sangue Pet'
    });
});

module.exports = router;





