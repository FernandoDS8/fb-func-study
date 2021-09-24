// import * as express from 'express'
// import { db } from "./config/db"

// const routes = express();

// interface Book {
//     id: number,
//     name: String,
//     writer: String,
//     year: number, 
//     price: number 
// }

// const bookCollection = 'books';

// //Criar novo livro
// routes.post('/books', async(req, res) =>{
//     try {
//         const book: Book = {
//             id: req.body['id'],
//             name: req.body['name'],
//             writer: req.body['writer'],
//             year: req.body['year'],
//             price: req.body['price']
//         }
//         const newDoc = await db.collection(bookCollection).add(book);
//         res.status(201).send(`New book: ${newDoc.id}`);

//     } catch (error) {
//         res.status(400).send("Ihhh rapaz, olha o vacilo.")
//     }

// })

// //Chamar todos os livros
// routes.get('/books', async (req, res) => {
//     try {
//         const bookQuerySnapshot = await db.collection(bookCollection).get();
//         const books: any[] = [];
//         bookQuerySnapshot.forEach(
//             (doc) => {
//                 books.push ({
//                     id: doc.id,
//                     data:doc.data()
//                 });
//             }
//         );
//         res.status(200).json(books);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// })

// //Chamar livro por Id
// routes.get('/books/:bookId', async (req, res) => {
//     const bookId = req.params.bookId;
//     db.collection(bookCollection).doc(bookId).get()
//         .then(book => {
//             if(!book.exists) throw new Error("Book not found");
//             res.status(200).json({
//                 id: book.id,
//                 data: book.data
//             });
//         })
// });

// //Editar livro
// routes.put('/books/:bookId', async (req, res) => {
//     const bookId = req.params.bookId;
//     db.collection(bookCollection).doc(bookId).set(req.body, {merge:true})
//         .then(() => res.json({id:req.params.bookId}))
//         .catch((error) => res.status(500).send(error))
// })

// //Deletar livro
// routes.delete('/books/:bookId', async (req, res) => {
//     const bookId = req.params.bookId;
//     db.collection(bookCollection).doc(bookId).delete()
//         .then(() => res.status(204).send("Book deleted"))
//         .catch(function (error) {
//             res.status(500).send(error);
//         });
// })


//exports.api = functions.region('southamerica-east1').https.onRequest(routes)