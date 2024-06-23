const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const preOrderRoutes = require('./routes/preOrderRoutes');
const couponRoutes = require('./routes/couponRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/preorders', preOrderRoutes);
app.use('/api/coupons', couponRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
