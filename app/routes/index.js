module.exports=(app)=>{
app.use('/api/accounts',require('./accounts.route.js'));
app.use('/api/auth',require('./auth.route'));
app.use('/api/regFormula',require('./regFormula.route'));
app.use('/api/profile',require('./profile.route'));
};
