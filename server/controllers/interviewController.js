const { generateInterviewQuestions } = require("../services/aiService");

const getInterviewQuestions=async(req,res)=>{

try{

const result=await generateInterviewQuestions(req.body.role);

res.json({

success:true,

...result

});

}catch(error){

res.status(500).json({

success:false,

message:error.message

});

}

};

module.exports={getInterviewQuestions};