const dbConnect = require("./config");

const insert = async () => {
    const db = await dbConnect();
    const result =await db.insert(
       [ { name: "note 8", brand: "Redmi", price: 433, category: "mobile", ram:"4GB" },
       { name: "note 5", brand: "vivo", price: 533, category: "mobile", ram:"8GB" },
       { name: "note 5", brand: "Mi", price: 333, category: "mobile", ram:"16GB" }
    
    
    ]
    );

  if(result.acknowledged)
  {
     console.log("data inserted");
  }
}

insert();