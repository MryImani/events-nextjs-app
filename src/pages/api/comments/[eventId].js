export default  function  handler(req, res) {
    const eventId = req.query.eventId;
    if(req.method === 'POST')
    {
        const {email, name, text} = req.body;
        if (
          !email ||
          !text ||
          !name ||
          !email.includes("@") ||
          text.trim() === "" ||
          name.trim() === ""
        ){
            res.status(422).json({ message: "Please enter valid data!" });
          }
        const newComment = {
            id : new Date().toISOString(),
            email,
            name,
            text
        }
        console.log(newComment);
        res.status(201).json({message : 'Your comment has been approved!' , newComment : newComment})
    }
    if( req.method === "GET")
    {
        const dummyComments = [
          {
            id: "c1",
            name: "maryam",
            email: "maryam@mail.com",
            text: "first comment",
          },
          {
            id: "c2",
            name: "maral",
            email: "maral@mail.com",
            text: "c2 comment",
          },
        ];
        res.status(200).json({comments : dummyComments})
    }
}