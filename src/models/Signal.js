const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SignalSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a name'],
            unique: true,
            trim: true,
            maxlength: [50, 'Name can not be more than 50 characters']
        },
        payload: {
            type: Schema.Types.Mixed
        }
    }, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Signal', SignalSchema);
