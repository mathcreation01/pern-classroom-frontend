import { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
    {
        id: 1,
        code: "CS101",
        name: "Introduction to Computer Science",
        department: "Computer Science",
        description: "Fundamentals of programming, algorithms, and problem-solving.",
        createdAt: "2024-06-01T12:00:00Z"
    },
    {
        id: 2,
        code: "MATH201",
        name: "Calculus I",
        department: "Mathematics",
        description: "Limits, derivatives, and integrals of single-variable functions.",
        createdAt: "2024-06-02T12:00:00Z"
    },
    {
        id: 3,
        code: "ENG150",
        name: "English Literature",
        department: "English",
        description: "Study of classic and contemporary English literature.",
        createdAt: "2024-06-03T12:00:00Z"
    }
];