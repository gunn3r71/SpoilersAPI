const spoiler = require('../model/spoiler');

exports.getById = (req,res,next) => {
    const id = req.params.id;
  
    spoiler.findById(id)
    .then(spoiler => {
        if(spoiler) {
            res.status(200).json({spoiler: spoiler});
        } else {
            res.status(404).json({message:'Oops, I don\'t have that =('});
        }
    })
    .catch(
        error => next(error)
    );
};

exports.getAll = (req,res,next) => {
    let limit = parseInt(req.query.limit || 0);
    let page = parseInt(req.query.page || 0);

    if(!Number.isInteger(limit) || !Number.isInteger(page))
        res.status(400).json({message:'Oops, try again! =('});
    
    const max = 25;

    limit = (limit>max || limit <= 0) ? max : limit;
    page = (page <= 0) ? 0 : page * limit;

    spoiler.findAll({limit: limit, offset: page}, {where: {status:true}})
        .then(
            spoilers => {
                res.json({spoilers: spoilers});
            }
        )
        .catch(
            error => next(error)
        ); 
};

exports.create = (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;
    const spoiler = req.body.spoiler;
    const status = req.body.status;

    spoiler.create({
        title: title,
        description: description,
        spoiler: spoiler,
        status: status
    }).then(
        spoiler => {
            res.status(201).json(spoiler);
        }
    )
    .catch(
        error => next(error)
    );
};

exports.update = (req,res,next) => {
    const id = req.params.id;
    const title = req.body.title;
    const description = req.body.description;
    const spoiler = req.body.spoiler;
    const status = req.body.status;

    spoiler.findById(id)
        .then(spoiler => {
            if(spoiler) {
                spoiler.update({
                    title: title,
                    description: description,
                    spoiler: spoiler,
                    status: status
                }, {where: {id: id}})
                .then(()=> {
                    res.status(204).send();
                })
                .catch(error => next(error));
            } else {
                res.status(404).json({message:'Oops, I don\'t have that =('});
            }
        })
        .catch(error => next(error));
};

exports.hardDelete = (req,res,next) => {
    const id = req.params.id;

    spoiler.findById(id)
        .then(
            spoiler => {
                if(spoiler){
                    spoiler.destroy({where: {id:id}})
                    .then(() => {
                            res.status(204).send();
                    })
                    .catch(error => next(error));
                } else {
                    res.status(404).json({message:'Oops, I don\'t have that =('});
                }
            }
        )
        .catch(error => next(error));
};

exports.softDelete = (req,res,next) => {
    const id = req.params.id;

    spoiler.findById(id)
    .then(
        spoiler => {
            if(spoiler){
                spoiler.update({status: status},{where: {id:id}})
                .then(() => {
                        res.status(204).send();
                })
                .catch(error => next(error));
            } else {
                res.status(404).json({message:'Oops, I don\'t have that =('});
            }
        }
    )
    .catch(error => next(error));
};