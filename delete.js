const dbConnect = require("./config");

const deleteData = async() => {
    let data = await dbConnect();
    let result = data.deleteOne({name:"note 8"})
    console.warn(result);
    if(result.acknowledged)
    {
        console.log("Data Deleted......");
    }
}

deleteData();