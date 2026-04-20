import "dotenv/config";

export const ENV = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    NODE_ENV: process.env.NODE_ENV,
    JWT_SECRET: process.env.JWT_SECRET,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    EMAIL_FROM: process.env.EMAIL_FROM,
    EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME,
    CLIENT_URL: process.env.CLIENT_URL
};

// PORT=3000
// MONGO_URI=mongodb://hs3322_db_user:7nuNqN3kqSuqqeiQ@ac-jbgipi0-shard-00-00.v2iy5jc.mongodb.net:27017,ac-jbgipi0-shard-00-01.v2iy5jc.mongodb.net:27017,ac-jbgipi0-shard-00-02.v2iy5jc.mongodb.net:27017/jatbox_db?ssl=true&replicaSet=atlas-kmsvwb-shard-0&authSource=admin&appName=Cluster0
// NODE_ENV=development
// JWT_SECRET=myjwtsecret

// RESEND_API_KEY=re_GbhrrGA8_DrHFS4zzGg6HF3kQK5mtXx2w

// EMAIL_FROM='onboarding@resend.dev'
// EMAIL_FROM_NAME='Jatbox'

// CLIENT_URL=http://localhost:5173