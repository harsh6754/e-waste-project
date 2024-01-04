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
        lowercase: true, // Convert email to lowercase to ensure uniqueness
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
                // Improved password validation
                return /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[0-9]).{8,}$/.test(value);
            },
            message: props => `${props.value} is not a valid password!`,
        },
    },
    // Remove confirmPassword from the schema, as it's not necessary to store in the database
});

// Use a pre-save hook to hash the password before saving to the database
AdminSchema.pre('save', async function (next) {
    try {
        const hashedPassword = await bcrypt.hash(this.password, parseInt(process.env.BCRYPT_SALT));
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});

const AdminModel = mongoose.model('Admin', AdminSchema);

export default AdminModel;
