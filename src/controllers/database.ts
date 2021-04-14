import mongoose from 'mongoose';

const connect = async (uri: string) => {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(`Connected to MongoDB`);
    } catch(e) {
        console.log(`Database connection failed: ${e.message}`);
    }
};

export default {connect};