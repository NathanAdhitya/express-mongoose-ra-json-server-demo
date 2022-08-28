import { Router } from 'express';
import raExpressMongoose from 'express-mongoose-ra-json-server';
import postModel from '../models/post.model';
import userModel from '../models/user.model';

const router = Router();
router.use(
  '/user',
  raExpressMongoose(userModel, {
    q: ['name', 'username'],
    allowedRegexFields: ['company'],
  })
);
router.use('/post', raExpressMongoose(postModel, { q: ['title'] }));

export default router;
