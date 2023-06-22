import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

const userSchema = mongoose.Schema({
    blogtitle: String,
    blogdescription: String,
    image: String
})
autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'blog')

const user = mongoose.model('blog', userSchema);

export default user;