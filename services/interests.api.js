import api from "./base.api";

export const getInterests = async () => {
    try {
        const res = await api.get("/interests/all")
        return res.data
    } catch (err) {
        console.log("Error fetching interests :", err)
        return []
    }
}

export const addInterest = async (data) => {
    try {
        const res = await api.post("/interest/create", data)
        alert("Interest added successfully")
        return res.data
    } catch (err) {
        alert("Failed to add interest")
        console.log("Error adding interest :", err)
        throw err
    }
}

export const deleteInterest = async (id) => {
    try {
        const res = await api.delete(`/interest/delete/${id}`)
        alert("Interest deleted successfully")
        return res.data
    } catch (err) {
        alert("Failed to delete interest")
        console.log("Error deleting interest :", err)
        throw err
    }
}