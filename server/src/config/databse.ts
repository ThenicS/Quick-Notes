import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(`${process.env.DATABASE_URL}`);
        console.log(
            'Database connnected: ',
            connect.connection.host,
            connect.connection.name,
            connect.connection.port
        );
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default connectDB;
