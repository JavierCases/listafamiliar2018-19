module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate('ListaFamiliar', function(err) {
    if (err) throw err;
//Codigo copiado ypegado del tutorial loopback
    app.models.ListaFamiliar.create([{
      nombre: 'Patatas origen españa'
    }, {
      nombre: 'Leche sin Lactosa'
    }, {
      nombre: 'Huevos de granja'
    }], function(err, listaFamiliar) {
      if (err) throw err;

      console.log('Modelos creados con exito en: \n', listaFamiliar);
    });
  });
};
