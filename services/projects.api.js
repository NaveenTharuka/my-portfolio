import api from "./base.api";

export const addProject = async (data) => {
    try {
        const res = await api.post("/project/create", data)
        alert("project added successfully")
        return res.data
    } catch (err) {
        alert("Failed to add project")
        throw err
    }
}

export const deleteProject = async (id) => {
    try {
        const res = await api.delete(`/project/delete/${id}`)
        alert("project deleted successfully")
        return res.data
    } catch (err) {
        alert("Failed to delete project")
        console.log("Error deleting project :", err)
        throw err
    }
}

export const getProjects = async () => {
    try {
        const res = await api.get("/projects/all")
        return res.data
    } catch (err) {
        console.log("Error fetching projects :", err)
        throw err
    }
}