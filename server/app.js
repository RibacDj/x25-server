const express = require('express');
// const path = require('path');
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');

const app = express();

app.use('/', userRoutes);
app.use('/admin', adminRoutes);

module.exports = app;
