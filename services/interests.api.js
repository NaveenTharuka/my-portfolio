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

export const addInterest = (data) => {
    try {
        const res = api.post("/interest/create", data)
        return res.data
    } catch (err) {
        console.log("Error adding interest :", err)
        throw err
    }
}

export const deleteInterest = (id) => {
    try {
        const res = api.delete(`/interest/${id}`)
        return res.data
    } catch (err) {
        console.log("Error deleting interest :", err)
        throw err
    }
}