import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
    courseData: {
        courseName: {
            type: String // Use the actual data type, not a string
        },
        courseImage: {
            type: String
        },
        courseDescription: {
            type: String
        }
    },
    courseInfo: {
        type: [Object] // Use Array with Object data type
    },
    videoNum: {
        type: Number // Use the actual data type, not a string
    },
    channelName: {
        type: String
    }
});

const Course = mongoose.models.Course || mongoose.model('Course', CourseSchema);

export default Course;
