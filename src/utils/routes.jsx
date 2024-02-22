import Home from "../page/Home";
import Student from "../page/Student";

export const routes = [
    {
        path: "/",
        element: Home,
    },
    {
        path: "/student/:id",
        element: Student
    }
];