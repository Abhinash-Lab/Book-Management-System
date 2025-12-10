const { books } = require("../Database/connection");

exports.fetchAllBooks = async(req,res)=>{
  const datas = await books.findAll();
  res.json({
    message : "Book fetched Successfully",
    datas
  })
}

exports.fetchSingleBook = async(req,res)=>{
  const id = req.params.id;
  const singleBook = await books.findByPk(id);
  if(singleBook != null){
    res.json({
      message : "Book fetched Successfully",
      singleBook
    })
  }
  else{
    res.json({
      message : `Book with the ${id} doesn't exists`
    })
  }
}

exports.addBook = async(req,res)=>{
  const {bookName,bookPrice,bookAuthor,bookGenre} = req.body;
  if(bookName && bookPrice && bookAuthor && bookGenre){
    await books.create({
      bookName,
      bookPrice,
      bookAuthor,
      bookGenre
    })
    res.json({
      message : "Book posted Successfully",
    })
  }
  else{
    res.json({
      Message : "All the information should be filled first"
    })
  }
}

exports.updateBook = async(req,res)=>{
  const id = req.params.id;
  const {bookName,bookPrice,bookAuthor,bookGenre} = req.body;
  await books.update({
    bookName,
    bookPrice,
    bookAuthor,
    bookGenre
  },
  {
    where : {
    id : id
   }
 })
  res.json({message : "Book updated Successfully"})
}

exports.deleteBook = async(req,res)=>{
  const id = req.params.id;
  const bookToDelete = await books.findByPk(id);
  if(bookToDelete != null){
    await books.destroy({
      where : {
        id
      }
    });
    res.json({
      message : "Book deleted Successfully"
    })
  }
  else{
    res.json({
      message : "Book already deleted"
    })
  }
}

// module.exports = {fetchAllBooks,fetchSingleBook,addBook,updateBook,deleteBook}