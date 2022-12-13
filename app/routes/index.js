module.exports=(app)=>{
app.use('/api/accounts',require('./accounts.route.js'));
app.use('/api/auth',require('./auth.route'));
app.use('/api/regFormula',require('./regFormula.route'));
app.use('/api/profile',require('./profile.route'));
app.use('/api/solicitudes',require('./solicitudes.route'));
app.use('/api/contact',require('./contactenos.route'));
app.use('/api/reporteFormulas',require('./generateReportes'));
app.use('/api/regPQRS',require('./pqrs.route'));

};
