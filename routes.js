const assert = require('assert');
const ObjectId = require('mongodb').ObjectId;

function configureRoutes(app, db) {
    //Configurar ruta inicial
    app.get('/', function (req, res) {
        console.log('hola en la consola');
        //Responder con un archivo
        res.sendFile(path.join(__dirname, '/public/index.html'));
    });

    app.get('/product/:title/:id', function (req, res) {

        var filter = {
            _id: {
                $eq: new ObjectId(req.params.id)
            }
        };
        // Get the documents collection
        const collection = db.collection('products');
        // Find some documents
        collection.find(filter).toArray(function (err, docs) {
            assert.equal(err, null);

            //Objeto contexto
            var context = docs[0];

            //Renderizar vista
            
            res.render('productView', context);

        });

    });
    //Ruta para la lista de productos con handlebars
    app.get('/store', function (req, res) {
        //Filtros


        var filters = {
            $and: []
        };


        if (req.query.gender) {
            filters.$and.push({
                gender: {
                    $eq: req.query.gender
                }
            });
        }

        if (req.query.search) {
            filters.$and.push({
                title: {
                    $regex: new RegExp(req.query.search, 'i')
                }
            });
        }
        //Orden
        var sortings = {};

        if (filters.$and.length == 0) {
            delete filters.$and;
        }


        // Get the documents collection
        const collection = db.collection('products');
        // Find some documents
        collection.find(filters).sort(sortings).toArray(function (err, docs) {
            assert.equal(err, null);

            //Objeto contexto
            var context = {
                products: docs,
            };
            console.log(docs);
            //Renderizar vista
            res.render('product', context);
        });
    });


}
module.exports = configureRoutes;