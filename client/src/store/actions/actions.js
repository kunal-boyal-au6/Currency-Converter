import * as actionTypes from "./actionTypes"


export const saveSlotDetails = (id, formData) => {
    return {
        type: actionTypes.SAVE_SLOT_DETAILS,
        id: id,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber
    }
}

export const storingSlotId = (id) => {
    return {
        type: actionTypes.STORING_SLOT_ID,
        id: id
    }
}