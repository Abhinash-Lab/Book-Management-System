
const {config} = require("dotenv")
const {Sequelize,DataTypes} = require("sequelize");
config();

const password = process.env.PASSWORD;
console.log(password);


const sequelize = new Sequelize(`postgresql://postgres.bgttfbmpblpuvtmsuchn:${password}@aws-1-ap-south-1.pooler.supabase.com:6543/postgres`)




sequelize.authenticate()
.then(()=>{
  console.log("Connection established successfully")
})
.catch((err)=>{
  console.log("Error" + err)
})


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.books = require("./models/book.model")(sequelize,DataTypes);

//migration code here
sequelize.sync({alter:true}).then(()=>{  //force:true removes all the data and make changes, alter only updates the targeted value and other data remains the same
  console.log("Migrated Successfully");
})

module.exports = db