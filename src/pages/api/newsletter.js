// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    if(!email || !email.includes('@'))
    {
        res.status(422).json({message:"Invalid email address."})
    }
    res.status(201).json({ message: "Signed Up" });
  } else {
     res.status(200).json({ message : "That is work!!!"});
  }
 
}
