const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');
require('dotenv').config(); // ✅ Load environment variables

const enpRouter = require('./Routes/enpRouter');
const investorRouter = require('./Routes/investorRouter');
const newsRouter = require('./Routes/newsRouter');
const eventRouter = require('./Routes/eventRouter');
const adminRouter = require('./Routes/adminRouter');
const paymentRouter = require('./Routes/paymentRouter');
const meetingRoutes = require('./Routes/meetingRoutes');
const contactRouter = require('./Routes/contactRouter');
const pitchRouter = require('./Routes/pitchRouter');
const investmentRouter = require('./Routes/investmentRouter');
const feedbackRouter = require('./Routes/feedbackRouter');

const app = express();
const port = process.env.PORT || 8000;

// ✅ Connect MongoDB using env variable
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

app.use(cors());
app.use(express.json());

app.use(fileUpload({
  useTempFiles: true
}));

// ✅ Routers
app.use('/entrepreneur', enpRouter);
app.use('/api/enp', enpRouter);
app.use('/investor', investorRouter);
app.use('/uploads', express.static('uploads'));
app.use('/api/add-news', newsRouter);
app.use('/api/events', eventRouter);
app.use('/admin', adminRouter);
app.use('/api/admin', adminRouter);
app.use('/pitches', pitchRouter);
app.use('/api/pitches', pitchRouter);
app.use('/api', pitchRouter);
app.use('/api/meetings', meetingRoutes);
app.use('/api', meetingRoutes);
app.use('/investments', investmentRouter);
app.use('/api/payment', paymentRouter);
app.use('/feedback', feedbackRouter);
app.use('/api/feedback', feedbackRouter);
app.use('/api/contact', contactRouter);

// ✅ Default route for root "/"
app.get("/", (req, res) => {
  res.send("✅ Pitch For Profit Backend is live and running");
});

app.listen(port, () => {
  console.log(`🚀 Server Running on port ${port}`);
});
