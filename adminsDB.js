const {knex} = require("./connections")


 //function for the admin tables

 //check on(http://localhost:4000/api/adminstrators/getAllAdmins)
const getAllAdmins = async () => {
  const result = await knex.select().from("adminstrators")
  return result
 }

 //FUNCTION TO GET AN ADMIN BY ID
  //check on (http://localhost:4000/api/adminstrators/{adminId})
 const getAdminById = async(id) => {
   const result = await knex .raw("select * from adminstrators where id = ?",[id])
   return result[0]
 }
  //FUNCTION TO ADD A ADMIN
const addAdmin = async  (admin) => {
  const result = await knex ("adminstrators").insert(admin)
  return result
}
//function to update the admins list
const updateAdminsList = async(admin)=>{
  const rowsAffected = await knex("adminstrators").where({Id:admin.id}).update(admin)
  return rowsAffected
}

//FUNCTION TO REMOVE AN ADMIN

const removeAdmin = async(id) => {
  const result = await knex("adminstrators").where({Id:id}).del()
  return result
}

module.exports={
  removeAdmin,
  addAdmin,
  getAdminById,
  getAllAdmins,
  updateAdminsList
}
