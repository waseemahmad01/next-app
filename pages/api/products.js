import { MongoClient } from 'mongodb';

async function handler(req, res) {
  const client = await MongoClient.connect(
    'mongodb+srv://waseem:SPaC0fzbq2k8ZYqe@inventory.pppug.mongodb.net/?retryWrites=true&w=majority'
  );
  const db = client.db();
  const products = db.collection('products');

  if (req.method === 'GET') {
    const data = await products.find().toArray();
    res.status(200).json(data);
  }
  if (req.method === 'POST') {
    await products.insertOne(req.body);
    res.status(201).json({ message: 'Product added sucessfully' });
  }

  client.close();
}

export default handler;
