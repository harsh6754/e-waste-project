// import mongoose, { Schema } from 'mongoose';

// const UserSchema = new Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     username: {
//         type: String,
//         unique: true,
//         required: [true, 'Username is required!'],
//     },
//     mobileNumber: {
//         type: String,
//         required: false,
//     },
//     email: {
//         type: String,
//         unique: true,
//         required: [true, 'email is required!'],
//     },
//     password: {
//         type: String,
//         required: true,
//         validate: {
//             validator: function (value) {
//                 return /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z]).{8,}$/.test(value);
//             },
//             message: props => `${props.value} is not a valid password!`,
//         },
//     },
//     confirmPassword: {
//         type: String,
//         required: true,
//     },
// });

// export const User = mongoose.models.user || mongoose.model("user", UserSchema);

import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        required: [true, 'Username is required!'],
    },
    mobileNumber: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'email is required!'],
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                // Password must have at least one uppercase letter, one lowercase letter,
                // one special character, and a minimum length of 8 characters.
                return /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[0-9]).{8,}$/.test(value);
            },
            message: props => `${props.value} is not a valid password!`,
        },
    },
    confirmPassword: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                // Confirm password must match the password field.
                return value === password;
            }, 
            message: 'Passwords do not match!',
        },
    },
});

export const User = mongoose.models.user || mongoose.model('user', UserSchema);

