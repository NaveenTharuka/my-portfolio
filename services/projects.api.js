import api from "./base.api";

export const addProject = async (data) => {
    try {
        const res = await api.post("/project/create", data)
        alert("project added successfully")
        return res
    } catch (err) {
        alert("Failed to add project")
        throw err
    }
}

export const deleteProject = (id) => {
    try {
        const res = api.delete(`/projects/${id}`)
        return res.data
    } catch (err) {
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