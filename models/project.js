const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    project: {
        type: String,
        required: true
    }
    },
    {timestamps:true });

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;