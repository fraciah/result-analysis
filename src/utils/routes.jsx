import Home from "../page/Home";
import Student from "../page/Student";
import Students from "../page/Students";
import Teachers from "../page/Teachers";

export const routes = [
    {
        path: "/",
        element: Home,
    },
    {
        path: "/students",
        element: Students,
    },
    {
        path: "/student/:id",
        element: Student
    },
    {
        path: "/teachers",
        element: Teachers,
    }
];