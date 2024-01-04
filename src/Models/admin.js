import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobileNumber: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z]).{8,}$/.test(value);
            },
            message: props => `${props.value} is not a valid password!`,
        },
    },
    confirmPassword: {
        type: String,
        required: true,
    },
});

const AdminModel = mongoose.model('Admin', AdminSchema);

export default AdminModel;
