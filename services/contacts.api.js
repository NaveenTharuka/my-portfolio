import api from "./base.api";


export const addResponse = async (data) => {
    try {
        const response = await api.post("/contact/create", data);
        alert(`Messege sent successfully`);
        return response.data;
    } catch (error) {
        alert(`Failed to send messege`);
        console.log(error);
    }
}

export const getResponses = async () => {
    try {
        const response = await api.get("/contact/all");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const deleteResponse = async (id) => {
    try {
        const response = await api.delete(`/contact/delete/${id}`);
        alert(`Response deleted successfully`);
        return response.data;
    } catch (error) {
        alert(`Failed to delete response`);
        console.log(error);
    }
}

export const markAsRead = async (id, read) => {
    try {
        const response = await api.put(`/contact/mark_as_read/${id}?read=${read}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
