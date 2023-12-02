const baseUrl = "http://192.168.1.2:5000"

export const authRequest = async (email, password) => {
  const response = await fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: email, password: password })
  })
  resualt = await response.json()
  return resualt
}
export const signupRequest = async (email, powerEyePassword, merossPassword) => {
  const response = await fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(
      {
        email: email,
        power_eye_password: powerEyePassword,
        cloud_password: merossPassword
      }
    )
  })
  resualt = await response.json()
  return resualt
}
export const logoutRequest = async (token) => {
  const response = await fetch(`${baseUrl}/logout`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },

  })
  resualt = await response.json()
  return resualt
}
export const editProfileInfoRequest = async (token,username,power_eye_password,meross_password) => {
  const response = await fetch(`${baseUrl}/user`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({
      meross_password: meross_password,
      power_eye_password: power_eye_password,
      username: username,
    })

  })
  resualt = await response.json()
  return resualt
}
export const getProfileInfoRequest = async (token) => {
  const response = await fetch(`${baseUrl}/user`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },
  })
  resualt = await response.json()
  return resualt
}
export const getProfileImageRequest = async (token) => {
  const response = await fetch(`${baseUrl}/upload_profile_pic`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },
  })
  resualt = await response.json()
  return resualt
}
export const deleteUserAccountRequest = async (token) => {
  const response = await fetch(`${baseUrl}/user`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },
  })
  resualt = await response.json()
  return resualt
}
export const getTotalEnergyRequest = async (token,timeframe,timeSinceCurrent) => {
  const response = await fetch(`${baseUrl}/total_energy/${timeframe}/${timeSinceCurrent}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },

  })
  resualt = await response.json()
  return resualt
}
export const getSmartPlugsRequest = async (token) => {
  const response = await fetch(`${baseUrl}/smartplugs`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },

  })
  resualt = await response.json()
  return resualt
}

export const addApplianceRequest = async (token, name , cloud_id , type) => {
  const response = await fetch(`${baseUrl}/appliance`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(
      {
        name: name,
        cloud_id: cloud_id,
        type: type
      }
    )

  })
  resualt = await response.json()
  return resualt
}
export const changeApplianceNameRequest = async (token, name, id) => {
  const response = await fetch(`${baseUrl}/update_appliance_name/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(
      {
        new_name: name,

      }
    )

  })
  resualt = await response.json()
  return resualt
}
export const getApplianceWithtIdRequest = async (token,appliance_id) => {
  const response = await fetch(`${baseUrl}/appliance/${appliance_id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },


  })

  resualt = await response.json()
  return resualt
}
export const getAllApplianceRequest = async (token) => {
  const response = await fetch(`${baseUrl}/get_all_appliances`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },


  })

  resualt = await response.json()
  return resualt
}
export const switchApplianceRequest = async (token,id,status) => {

  const response = await fetch(`${baseUrl}/switch_appliance/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(
      {
        "status": status

      }
    )

  })
  resualt = await response.json()
  return resualt
}
export const deleteApplianceRequest = async (token,appliance_id) => {
  const response = await fetch(`${baseUrl}/delete_appliance/${appliance_id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    

  })
  resualt = await response.json()
  return resualt
}
export const addGoalRequest = async (token, goal) => {
  const response = await fetch(`${baseUrl}/goal`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(
      {
        "energy_goal":goal
      }
    )

  })
  resualt = await response.json()
  return resualt
}
export const getGoalRequest = async (token) => {
  const response = await fetch(`${baseUrl}/goal`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },

  })
  resualt = await response.json()
  return resualt
}

export const deleteGoalRequest = async (token) => {
  const response = await fetch(`${baseUrl}/goal`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },

  })
  resualt = await response.json()
  return resualt
}
// all room api requests
export const addNewRoomRequest = async (token, appliance_ids , name) => {

  const response = await fetch(`${baseUrl}/create_room`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(
      {
        "name" : name,
        "appliance_ids":appliance_ids
      }
    )

  })
  resualt = await response.json()
  return resualt
}
export const getRoomsRequest = async (token) => {

  const response = await fetch(`${baseUrl}/get_all_user_rooms`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    

  })
  resualt = await response.json()
  return resualt
}
export const getRoomAppliancesRequest = async (token,room_id) => {

  const response = await fetch(`${baseUrl}/get_room_appliances/${room_id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    

  })
  resualt = await response.json()
  return resualt
}

export const switchRoomApplianceRequest = async (token, room_id, new_status) => {

  const response = await fetch(`${baseUrl}/switch_room/${room_id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body:JSON.stringify({
      "new_status":new_status
    })
    

  })
  resualt = await response.json()
  return resualt
}
export const addApplianceToRoomRequest = async (token, room_id, appliance_ids) => {

  const response = await fetch(`${baseUrl}/add_appliance_to_room/${room_id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body:JSON.stringify({
      "appliance_ids":appliance_ids
    })
    

  })
  resualt = await response.json()
  return resualt
}

export const deleteApplianceFromRoomRequest = async (token, room_id, appliance_id) => {

  const response = await fetch(`${baseUrl}/delete_appliance_from_room/${room_id}/${appliance_id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },

  })
  resualt = await response.json()
  return resualt
}

export const updateRoomNameRequest = async (token, room_id, new_name) => {

  const response = await fetch(`${baseUrl}/update_room_name/${room_id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body:JSON.stringify({
      "new_name":new_name
    })
    

  })
  resualt = await response.json()
  return resualt
}

export const deleteRoomRequest = async (token, room_id) => {

  const response = await fetch(`${baseUrl}/delete_room/${room_id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },

  })
  resualt = await response.json()
  return resualt
}
//energy

export const getApplianceEnergyRequest = async (token,applianceId,time) => {
  const response = await fetch(`${baseUrl}/appliance_energy/${time}/${applianceId}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },

  })
  resualt = await response.json()
  return resualt
}
export const getRoomEnergyRequest = async (token,roomId,time) => {
  const response = await fetch(`${baseUrl}/room_energy/${time}/${roomId}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },

  })
  resualt = await response.json()
  return resualt
}
export const getTheTotalEnergyRequest = async (token,time) => {
  const response = await fetch(`${baseUrl}/total_energy/${time}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },

  })
  resualt = await response.json()
  return resualt
}

export const getMostRecentReadingRequest = async (token,appliance_id) => {
  const response = await fetch(`${baseUrl}/get_most_recent_reading/${appliance_id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },

  })
  resualt = await response.json()
  return resualt
}
export const sentFcmToken = async (token, fcm_token ,device_id ) => {

  const response = await fetch(`${baseUrl}/FCM_token`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(
      {
        "device_id" : device_id,
        "fcm_token":fcm_token
      }
    )

  })
  resualt = await response.json()
  return resualt
}
const path = require('path');

export const uploadImage = async (token,file,uri) => {

  const { base: filenameWithExtension, ext: fileExtension } = path.parse(uri);
  let extension = fileExtension.replace(".", "");
  let filename = filenameWithExtension.substring(0, filenameWithExtension.lastIndexOf("."));

      const response = await fetch(`${baseUrl}/profile_pic`, {
        method: 'POST',
  
        headers:{
          "content-type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          "file": file,
          "filename":filename,
          "extension": extension
          })
      });
      resualt = await response.json()
      return resualt
      
  };
  export const getImage =async(token)=>{
  
    const response = await fetch(`${baseUrl}/profile_pic`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    })
    let resualt = await response.json()
    return resualt
  }

  
