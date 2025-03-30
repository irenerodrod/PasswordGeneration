const passwordSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    category: { type: String, required: true },
    password: { type: String, required: true }
  });
  module.exports = mongoose.model('Password', passwordSchema);