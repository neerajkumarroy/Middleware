const dbConnect = require("./config");

const updateData = () => {
    let data = dbConnect();
    const result = data.updateOne(
        
        { name:"note 5" },{
        $set: {name:'max 10',price:865}
       
        }
    
    );
    console.warn(result);
}